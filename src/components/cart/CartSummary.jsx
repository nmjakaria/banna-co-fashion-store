import { formatPrice } from "@/lib/formatPrice";

export default function CartSummary({ subtotal }) {
  const shipping = subtotal > 5000 ? 0 : 100; // Example logic
  const total = subtotal + shipping;

  return (
    <div className="bg-[#EBEBE8] p-8 space-y-4">
      <h2 className="font-serif text-xl font-bold mb-6">Order Summary</h2>
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
      </div>
      <div className="border-t border-[#8A8578] pt-4 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </div>
      <button className="w-full bg-[#0E0E10] text-white py-4 font-medium hover:bg-[#C97A4A] transition-subtle mt-6">
        Proceed to Checkout
      </button>
    </div>
  );
}