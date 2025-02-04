import { cn } from '@/utils/style';

interface PresetButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  selected?: boolean;
}

function PresetButton({ children, selected, ...props }: PresetButtonProps) {
  const buttonClasses = cn(
    'cursor-pointer rounded-lg border border-category_border bg-white px-4 py-3 text-black transition-colors text-sm',
    'hover:bg-primary hover:text-white',
    'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400',
    'disabled:hover:border-gray-200 disabled:hover:text-gray-400',
    selected && 'bg-primary text-white',
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default PresetButton;
