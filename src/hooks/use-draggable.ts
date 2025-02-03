import { RefObject } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import throttle from '@/utils/throttle';

export function useDraggable(scrollRef: RefObject<HTMLDivElement | null>) {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [totalX, setTotalX] = useState(0);
  const velocityRef = useRef<number>(0);
  const lastMouseXRef = useRef<number>(0);
  const lastTimestampRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    const x = e.clientX;
    lastMouseXRef.current = x;
    lastTimestampRef.current = Date.now();
    velocityRef.current = 0;

    if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
      setTotalX(x + scrollRef.current.scrollLeft);
    }

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const onDragMove = throttle((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();

    const currentX = e.clientX;
    const currentTimestamp = Date.now();
    const deltaTime = currentTimestamp - lastTimestampRef.current;

    if (deltaTime > 0) {
      const deltaX = currentX - lastMouseXRef.current;
      velocityRef.current = deltaX / deltaTime;
    }

    lastMouseXRef.current = currentX;
    lastTimestampRef.current = currentTimestamp;

    const scrollLeft = totalX - currentX;
    if (scrollRef.current && 'scrollLeft' in scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft;
    }
  }, 10);

  const applyMomentum = useCallback(() => {
    if (!scrollRef.current) return;

    const deceleration = 0.95;
    const stopThreshold = 0.01;

    const animate = () => {
      if (!scrollRef.current) return;

      velocityRef.current *= deceleration;

      scrollRef.current.scrollLeft -= velocityRef.current * 16;

      if (Math.abs(velocityRef.current) > stopThreshold) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const onDragEnd = (e: React.MouseEvent) => {
    if (!isDragging) return;
    if (!scrollRef.current) return;
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (Math.abs(velocityRef.current) > 0.1) {
      applyMomentum();
    }
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return {
    onMouseDown: onDragStart,
    onMouseMove: onDragMove,
    onMouseUp: onDragEnd,
    onMouseLeave: onDragEnd,
  };
}
