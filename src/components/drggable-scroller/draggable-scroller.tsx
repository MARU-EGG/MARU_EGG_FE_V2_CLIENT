import { useRef } from 'react';
import { useDraggable } from '@/hooks/use-draggable';

function DraggableScroller({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const events = useDraggable(scrollRef);

  return (
    <div
      ref={scrollRef}
      className="scrollbar flex w-80 cursor-grab select-none flex-nowrap items-start gap-5 overflow-x-auto"
      {...events}
    >
      {children}
    </div>
  );
}

export default DraggableScroller;
