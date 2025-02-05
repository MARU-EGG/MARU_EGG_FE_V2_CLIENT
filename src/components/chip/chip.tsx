function Chip({ label }: { label: string }) {
  return (
    <div className="flex max-h-6 items-center rounded-2xl bg-primary-egg px-2 py-1">
      <span className="text-label font-semibold text-primary">{label}</span>
    </div>
  );
}

export default Chip;
