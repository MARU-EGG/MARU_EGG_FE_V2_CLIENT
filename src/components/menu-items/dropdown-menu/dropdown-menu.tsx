import { ArrowDownIcon } from '@/assets/svg';

interface DropdownMenuProps {
  label: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

function DropdownMenu({ label, onClick }: DropdownMenuProps) {
  return (
    <div className="cursor-pointer px-4 py-3 text-sm">
      <div
        onClick={onClick}
        className="flex items-center justify-between rounded-md border p-2 text-gray-400 transition-colors hover:bg-gray-100"
      >
        <div>{label}</div>
        <ArrowDownIcon />
      </div>
    </div>
  );
}

export default DropdownMenu;
