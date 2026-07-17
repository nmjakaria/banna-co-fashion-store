import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import Badge from "../ui/Badge";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductCard({ product }) {
  const { id, name, category, price, oldPrice, images, inStock, isNew, rating } = product;
  const isSale = oldPrice && oldPrice > price;

  return (
    <Link href={`/products/${id}`} className="group block h-full">
      {/* Container with shadow-soft */}
      <div className="flex flex-col h-full rounded-lg bg-white shadow-soft hover:shadow-lg transition-subtle border border-hairline overflow-hidden">
        
        {/* Image Section */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-[#EBEBE8]">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {!inStock && <Badge variant="neutral">Out of Stock</Badge>}
            {inStock && isNew && <Badge variant="outline" className="bg-white/80 backdrop-blur-md border-0">New</Badge>}
            {inStock && isSale && <Badge variant="sale" className="border-0">Sale</Badge>}
          </div>

          <Image
            src={images[0]}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${images.length > 1 ? 'group-hover:opacity-0' : ''}`}
            sizes="(max-width: 640px) 100vw, 300px"
          />
          
          {images.length > 1 && (
            <Image
              src={images[1]}
              alt={name}
              fill
              className="object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
              sizes="(max-width: 640px) 100vw, 300px"
            />
          )}
          
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Info Section */}
        <div className="p-5 flex flex-col grow">
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#8A8578]">
              {category}
            </span>
            {rating && (
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-[#C97A4A] text-[#C97A4A]" />
                <span className="text-xs font-medium text-[#0E0E10]">{rating}</span>
              </div>
            )}
          </div>
          
          <h3 className="text-sm md:text-base font-medium text-[#0E0E10] group-hover:text-[#C97A4A] transition-colors line-clamp-2 mb-4">
            {name}
          </h3>

          <div className="mt-auto flex items-center gap-3">
            <span className="text-base font-bold text-[#0E0E10]">
              {formatPrice(price)}
            </span>
            {isSale && (
              <span className="text-xs text-[#8A8578] line-through">
                {formatPrice(oldPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}