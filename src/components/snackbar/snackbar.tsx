import { useEffect, useState } from 'react';
import { WarningIcon } from '@/assets/svg';

interface SnackbarProps {
  open: boolean;
  handleClose: () => void;
  autoHideDuration: number;
  message: string;
  position: 'top' | 'bottom';
}

function Snackbar({ open, handleClose, autoHideDuration, message }: SnackbarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer = null;

    if (open) {
      setIsVisible(true);
      timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          handleClose();
        }, 200);
      }, autoHideDuration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [open, autoHideDuration, handleClose]);

  if (!open) return null;

  return (
    <div className="absolute bottom-24 flex w-full justify-center">
      <div
        className={`flex gap-3 rounded-3xl bg-slate-800 px-8 py-4 text-headline text-white transition-all duration-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        } `}
      >
        <WarningIcon />
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Snackbar;
