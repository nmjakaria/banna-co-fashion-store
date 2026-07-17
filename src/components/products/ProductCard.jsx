import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import Badge from "../ui/Badge";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductCard({ product }) {
  const { id, name, category, price, oldPrice, images, inStock, isNew, rating } = product;

  // Determine which badges to show
  const isSale = oldPrice && oldPrice > price;

  return (
    <Link href={`/products/${id}`} className="group flex flex-col h-full">
      {/* Image Gallery Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EBEBE8] border border-hairline mb-4">
        
        {/* Badges - Top Left */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {!inStock && (
            <Badge variant="neutral">Out of Stock</Badge>
          )}
          {inStock && isNew && (
            <Badge variant="outline" className="bg-[#FAFAF8]/90 backdrop-blur-sm">New</Badge>
          )}
          {inStock && isSale && (
            <Badge variant="sale">Sale</Badge>
          )}
        </div>

        {/* Primary Image */}
        <Image
          src={images[0]}
          alt={name}
          fill
          className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
            images.length > 1 ? 'group-hover:opacity-0' : ''
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Secondary Image (Hover State) */}
        {images.length > 1 && (
          <Image
            src={images[1]}
            alt={`${name} alternate view`}
            fill
            className="object-cover transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 group-hover:scale-105 absolute inset-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[#8A8578] text-xs font-medium tracking-wide uppercase">
              {category}
            </span>
            {rating && (
              <div className="flex items-center gap-1 text-[#0E0E10]">
                <Star size={12} className="fill-[#0E0E10]" />
                <span className="text-xs font-medium">{rating}</span>
              </div>
            )}
          </div>
          <h3 className="text-[#0E0E10] font-medium text-sm md:text-base line-clamp-2 transition-subtle group-hover:text-[#C97A4A]">
            {name}
          </h3>
        </div>
        
        <div className="flex items-center gap-3 mt-3">
          <span className="text-[#0E0E10] font-bold">
            {formatPrice(price)}
          </span>
          {isSale && (
            <span className="text-[#8A8578] text-sm line-through decoration-[#8A8578]/50">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}