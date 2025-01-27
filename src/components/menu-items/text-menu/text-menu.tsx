interface TextMenuProps {
  label: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

function TextMenu({ label, onClick }: TextMenuProps) {
  return (
    <div onClick={onClick} className="cursor-pointer px-4 py-3 text-sm transition-colors hover:bg-gray-100">
      {label}
    </div>
  );
}

export default TextMenu;
