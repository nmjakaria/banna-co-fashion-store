/* eslint-disable react/no-unescaped-entities */
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="w-full py-20 flex flex-col items-center justify-center text-center bg-[#FAFAF8] border border-hairline">
        <h3 className="font-serif text-2xl font-bold text-[#0E0E10] mb-2">No products found</h3>
        <p className="text-[#8A8578]">
          We couldn't find anything matching your current filters. Try adjusting them.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}