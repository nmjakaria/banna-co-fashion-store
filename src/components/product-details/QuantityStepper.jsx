export default function QuantityStepper({ quantity, setQuantity }) {
  return (
    <div className="flex items-center border border-[#EBEBE8] w-max">
      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-[#EBEBE8] transition-subtle">-</button>
      <span className="px-4 text-sm font-medium">{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-[#EBEBE8] transition-subtle">+</button>
    </div>
  );
}