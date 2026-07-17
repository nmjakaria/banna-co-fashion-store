import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { products } from "@/data/products";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  // Select a curated list of products to feature (e.g., first 4 items)
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <SectionHeading 
            title="New Arrivals" 
            subtitle="The latest additions to our modern classic collection."
            className="mb-0"
          />
          <Link 
            href="/products" 
            className="group flex items-center gap-2 text-[#0E0E10] font-medium hover:text-[#C97A4A] transition-subtle"
          >
            <span className="underline underline-offset-4">View Collection</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}