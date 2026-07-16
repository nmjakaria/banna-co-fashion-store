import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-[#FAFAF8] pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="font-serif text-3xl font-bold text-[#0E0E10] tracking-tight mb-4 inline-block">
              BANNA Co.
            </Link>
            <p className="text-[#8A8578] max-w-sm mt-2 leading-relaxed">
              Wear the moment. A curation of minimal, high-quality essentials designed to elevate your everyday wardrobe.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-[#0E0E10] mb-6 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-4 flex flex-col">
              <li><Link href="/products" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">All Products</Link></li>
              <li><Link href="/products?category=Panjabi" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Panjabis</Link></li>
              <li><Link href="/products?category=Shirt" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Shirts</Link></li>
              <li><Link href="/products?category=Jacket" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Jackets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#0E0E10] mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 flex flex-col">
              <li><a href="#" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Contact Us</a></li>
              <li><a href="#" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Shipping & Returns</a></li>
              <li><a href="#" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">Size Guide</a></li>
              <li><a href="#" className="text-[#8A8578] hover:text-[#C97A4A] transition-subtle">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-hairline pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#8A8578]">
          <p>&copy; {currentYear} BANNA Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#0E0E10] transition-subtle">Instagram</a>
            <a href="#" className="hover:text-[#0E0E10] transition-subtle">Twitter</a>
            <a href="#" className="hover:text-[#0E0E10] transition-subtle">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}