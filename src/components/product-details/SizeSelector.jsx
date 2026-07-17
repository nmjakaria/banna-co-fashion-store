export default function SizeSelector({ sizes, selected, onSelect }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[#0E0E10]">Size</p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={`w-12 h-12 flex items-center justify-center border text-sm uppercase transition-subtle ${
              selected === size ? "bg-[#0E0E10] text-white border-[#0E0E10]" : "border-[#EBEBE8] hover:border-[#0E0E10]"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}