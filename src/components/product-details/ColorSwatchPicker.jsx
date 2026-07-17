export default function ColorSwatchPicker({ colors, selected, onSelect }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-[#0E0E10]">
        Color: <span className="text-[#8A8578] font-normal">{selected}</span>
      </p>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            // Use a unique value like color.name or color.id
            key={color.name} 
            onClick={() => onSelect(color.name)}
            className={`w-10 h-10 rounded-full border transition-subtle ${
              selected === color.name 
                ? "ring-2 ring-offset-2 ring-[#0E0E10]" 
                : "border-[#EBEBE8]"
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
            aria-label={`Select ${color.name}`}
          />
        ))}
      </div>
    </div>
  );
}