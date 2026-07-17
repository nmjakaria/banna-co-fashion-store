import ProductCard from "../products/ProductCard";
import { products } from "@/data/products";

export default function RelatedProducts({ category, currentProductId }) {
  const related = products
    .filter(p => p.category === category && p.id !== currentProductId)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-[#EBEBE8]">
      <h3 className="font-serif text-2xl font-bold mb-8">You might also like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {related.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}