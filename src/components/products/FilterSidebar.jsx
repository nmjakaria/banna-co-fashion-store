"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { categories } from "@/data/products";

export default function FilterSidebar({ isMobile = false, onClose }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const inStockOnly = searchParams.get("inStock") === "true";

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "All" || !value) params.delete(key);
    else params.set(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    if (isMobile && onClose) onClose();
  };

  return (
    <div className="space-y-8 shadow-lg p-6 bg-white">
      {/* Categories */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#8A8578]">Category</h4>
        <div className="flex flex-col gap-2">
          {["All", ...categories.filter(c => c !== "All")].map((cat) => (
            <button
              key={cat}
              onClick={() => updateParams("category", cat)}
              className={`text-left text-sm py-1 transition-subtle ${
                currentCategory === cat ? "text-[#C97A4A] font-medium" : "text-[#0E0E10] hover:text-[#C97A4A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="pt-6 border-t border-banna-hairline space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#8A8578]">Availability</h4>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => updateParams("inStock", e.target.checked)}
            className="w-4 h-4 rounded-none border-[#8A8578] accent-[#C97A4A]"
          />
          <span className="text-sm text-[#0E0E10]">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}