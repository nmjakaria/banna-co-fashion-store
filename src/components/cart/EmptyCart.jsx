/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="py-20 text-center space-y-6">
      <h2 className="font-serif text-3xl font-bold">Your bag is empty</h2>
      <p className="text-[#8A8578]">Looks like you haven't added anything to your bag yet.</p>
      <Link href="/products" className="inline-block px-8 py-4 bg-[#0E0E10] text-white font-medium hover:bg-[#C97A4A] transition-subtle">
        Continue Shopping
      </Link>
    </div>
  );
}