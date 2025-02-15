import { useState } from 'react';
import { CheckFalseIcon, CheckTrueIcon } from '@/assets/svg';
import { cn } from '@/utils/style';

interface CheckboxProps {
  label: string;
  onClick?: (event?: React.MouseEvent<HTMLLabelElement>) => void;
  disabled?: boolean;
}

function Checkbox({ label, onClick, disabled = false }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    if (disabled) return;
    event.preventDefault();
    setChecked(!checked);
    onClick?.(event);
  };

  return (
    <label htmlFor={label} onClick={handleClick}>
      <div className={cn('relative px-4 py-3', 'hover:rounded-md hover:bg-gray-50', 'cursor-pointer')}>
        <input id={label} type="checkbox" className="sr-only" disabled={disabled}></input>
        <div className="flex items-center gap-2">
          {checked ? <CheckTrueIcon /> : <CheckFalseIcon />}
          <span className="text-sm">{label}</span>
        </div>
      </div>
    </label>
  );
}

export default Checkbox;
