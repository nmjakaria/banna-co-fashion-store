import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function PromoBanner() {
  return (
    <section className="py-12 md:py-20 bg-[#FAFAF8]">
      <Container>
        <div className="flex flex-col lg:flex-row border border-hairline bg-[#0E0E10] text-[#FAFAF8] overflow-hidden shadow-soft">
          {/* Image Half */}
          <div className="relative w-full lg:w-1/2 h-100 lg:h-125">
            <Image
              src="https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=2073&auto=format&fit=crop"
              alt="Mid-Season Sale"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text Half */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 md:p-16 lg:p-20">
            <span className="text-[#C97A4A] text-sm font-bold tracking-widest uppercase mb-4 block">
              Limited Time Only
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Mid-Season <br /> Archives Sale.
            </h2>
            <p className="text-[#EBEBE8] text-base md:text-lg mb-10 max-w-md font-light leading-relaxed">
              Elevate your transitional wardrobe with up to 40% off selected signature pieces. Exclusively online.
            </p>
            <div>
              <Link 
                href="/products?sale=true" 
                className="inline-block bg-[#FAFAF8] text-[#0E0E10] hover:bg-[#C97A4A] hover:text-[#FAFAF8] px-8 py-4 font-medium transition-subtle"
              >
                Shop The Sale
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}