import { Star } from "lucide-react";

export default function RatingStars({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={16} 
          className={i < Math.round(rating) ? "fill-[#C97A4A] text-[#C97A4A]" : "text-[#EBEBE8]"} 
        />
      ))}
      <span className="text-sm text-[#8A8578] ml-2">({rating})</span>
    </div>
  );
}