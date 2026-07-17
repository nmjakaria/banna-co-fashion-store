"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { categories } from "@/data/products";

// Mapping category names to specific editorial images for the cards
const categoryImages = {
  "Panjabi": "https://images.unsplash.com/photo-1774527929750-f2f32fbb3b93?q=80&w=600&auto=format&fit=crop",
  "Shirt": "https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?q=80&w=600&auto=format&fit=crop",
  "T-Shirt": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop",
  "Polo": "https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=600&auto=format&fit=crop",
  "Kurta": "https://images.pexels.com/photos/8692288/pexels-photo-8692288.jpeg?q=80&w=600&auto=format&fit=crop",
  "Jacket": "https://images.unsplash.com/photo-1727515546577-f7d82a47b51d?q=80&w=600&auto=format&fit=crop",
};

export default function CategoryStrip() {
  const scrollContainerRef = useRef(null);

  // Filter out the "All" category for the visual strip
  const displayCategories = categories.filter((cat) => cat !== "All");

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Scroll by roughly one card width + gap
      const scrollAmount = direction === "left" ? -340 : 340;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] drop-shadow-md">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <SectionHeading 
            title="Shop by Category" 
            subtitle="Curated essentials for every occasion."
            className="mb-0"
          />
          
          <div className="flex items-center gap-6">
            <Link 
              href="/products" 
              className="hidden md:inline-block text-[#0E0E10] font-medium hover:text-[#C97A4A] transition-subtle underline underline-offset-4"
            >
              View All
            </Link>
            
            {/* Custom Navigation Arrows */}
            <div className="hidden md:flex gap-2">
              <button 
                onClick={() => scroll("left")}
                className="p-3 border border-hairline rounded-full bg-white text-[#0E0E10] hover:border-[#0E0E10] hover:bg-[#0E0E10] hover:text-white transition-subtle shadow-soft"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="p-3 border border-hairline rounded-full bg-white text-[#0E0E10] hover:border-[#0E0E10] hover:bg-[#0E0E10] hover:text-white transition-subtle shadow-soft"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Strip */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 pt-2 no-scrollbar snap-x snap-mandatory"
          >
            {displayCategories.map((category) => (
              <Link 
                key={category} 
                href={`/products?category=${category}`}
                className="group relative shrink-0 w-70 md:w-[320px] aspect-4/5 snap-start overflow-hidden border border-hairline bg-[#EBEBE8] shadow-soft rounded-xl"
              >
                <Image
                  src={categoryImages[category] || "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop"}
                  alt={`${category} Category`}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 320px"
                />
                
                {/* Modern Editorial Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0E0E10]/90 via-[#0E0E10]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Card Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div>
                    <span className="text-[#C97A4A] text-xs font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Explore
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#FAFAF8]">
                      {category}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}