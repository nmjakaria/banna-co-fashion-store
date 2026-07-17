/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SlidersHorizontal, Search, X } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductGrid from "@/components/products/ProductGrid";
import ProductSkeleton from "@/components/products/ProductSkeleton";
import FilterSidebar from "@/components/products/FilterSidebar";
import SortDropdown from "@/components/products/SortDropdown";
import { products } from "@/data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(searchParams.get("q") || "");

  // Prevent scrolling when mobile filter is open
  useEffect(() => {
    if (isMobileFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileFilterOpen]);

  // Handle Search Submission
  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchInput.trim()) {
      params.set("q", searchInput.trim());
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Main Filtering and Sorting Logic with Simulated Delay
  useEffect(() => {
    setIsLoading(true);

    const category = searchParams.get("category") || "All";
    const sort = searchParams.get("sort") || "featured";
    const q = searchParams.get("q")?.toLowerCase() || "";
    const inStockOnly = searchParams.get("inStock") === "true";
    const isSale = searchParams.get("sale") === "true";

    // Simulate network delay for realistic feel
    const timer = setTimeout(() => {
      let result = [...products];

      // 1. Filter by Category
      if (category !== "All") {
        result = result.filter((p) => p.category === category);
      }

      // 2. Filter by Search Query
      if (q) {
        result = result.filter(
          (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
        );
      }

      // 3. Filter by Stock
      if (inStockOnly) {
        result = result.filter((p) => p.inStock);
      }

      // 4. Filter by Sale (from PromoBanner)
      if (isSale) {
        result = result.filter((p) => p.oldPrice && p.oldPrice > p.price);
      }

      // 5. Sort
      switch (sort) {
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          // Since we don't have dates, we'll sort by the isNew boolean
          result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
          break;
        default:
          // Featured: implicit original order of products array
          break;
      }

      setFilteredProducts(result);
      setIsLoading(false);
    }, Math.floor(Math.random() * 200) + 400); // 400-600ms delay

    return () => clearTimeout(timer);
  }, [searchParams]);

  return (
    <div className="bg-banna-white min-h-screen pb-24">
      {/* Page Header */}
      <div className="bg-banna-white text-banna-black py-16 md:py-24">
        <Container>
          <SectionHeading
            title="The Collection"
            subtitle="Thoughtfully designed pieces for your everyday rotation."
            className="mb-0 text-banna-black"
          />
        </Container>
      </div>

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Desktop Sidebar (Hidden on <1024px) */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 h-max">
            <FilterSidebar />
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Toolbar: Search, Mobile Filter Toggle, Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-hairline">
              
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full bg-transparent border border-[#EBEBE8] pl-10 pr-4 py-2 text-sm text-[#0E0E10] focus:outline-none transition-subtle rounded-none"
                />
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8578]" />
              </form>

              <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm font-medium text-[#0E0E10] border border-[#EBEBE8] px-4 py-2 hover:bg-[#EBEBE8] transition-subtle"
                >
                  <SlidersHorizontal size={16} />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <SortDropdown />
              </div>
            </div>

            {/* Product Results */}
            <div className="mb-4 text-sm text-[#8A8578]">
              {isLoading ? (
                "Loading products..."
              ) : (
                `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`
              )}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {[...Array(6)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#0E0E10]/50 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          
          {/* Drawer Panel */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#FAFAF8] shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex items-center justify-between px-6 py-4 border-b border-hairline">
              <h2 className="font-serif text-xl font-bold text-[#0E0E10]">Filters</h2>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 text-[#8A8578] hover:text-[#0E0E10] transition-subtle rounded-full hover:bg-[#EBEBE8]"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <FilterSidebar isMobile onClose={() => setIsMobileFilterOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#FAFAF8] min-h-screen pt-24 pb-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        </Container>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}