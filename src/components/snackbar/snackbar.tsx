import { useEffect } from 'react';
import { WarningIcon } from '@/assets/svg';
import { useAnimation } from '@/hooks/use-animation.hooks';
import { cn } from '@/utils/style';

interface SnackbarProps {
  open: boolean;
  handleClose: () => void;
  autoHideDuration: number;
  message: string;
  position: 'top' | 'bottom';
}

function Snackbar({ open, handleClose, autoHideDuration, message, position }: SnackbarProps) {
  const { shouldRender, onTransitionEnd, animationTrigger } = useAnimation(open);

  useEffect(() => {
    let timer = null;
    if (open) {
      timer = setTimeout(() => {
        setTimeout(() => {
          handleClose();
        }, 200);
      }, autoHideDuration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open]);

  if (!shouldRender) return null;

  return (
    <div className={cn('absolute z-20 flex w-full justify-center', position === 'bottom' ? 'bottom-24' : 'top-5')}>
      <div
        onTransitionEnd={onTransitionEnd}
        className={cn(
          'flex gap-3 rounded-3xl bg-slate-800 px-8 py-4 text-headline text-white transition-all duration-200',
          animationTrigger ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
        )}
      >
        <WarningIcon />
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Snackbar;
