import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <CategoryStrip />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}
