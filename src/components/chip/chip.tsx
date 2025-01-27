function Chip({ label }: { label: string }) {
  return (
    <div className="bg-primary-egg rounded-2xl px-2 py-1">
      <span className="text-label font-semibold text-primary">{label}</span>
    </div>
  );
}

export default Chip;
