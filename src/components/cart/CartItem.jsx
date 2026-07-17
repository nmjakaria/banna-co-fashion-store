"use client";

import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { formatPrice } from "@/lib/formatPrice";

export default function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="flex gap-4 py-6 border-b border-[#EBEBE8]">
      <div className="relative w-20 h-24 bg-[#EBEBE8] shrink-0 rounded-md overflow-hidden">
        <Image src={item.images[0]} alt={item.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-[#0E0E10]">{item.name}</h3>
            {/* Using item.color and item.size to match your data structure */}
            <p className="text-sm text-[#8A8578] mt-1">{item.color} / {item.size}</p>
          </div>
          <button 
            // removeItem needs the id, color, and size to delete the exact variant
            onClick={() => removeItem(item.id, item.color, item.size)} 
            className="text-[#8A8578] hover:text-[#0E0E10] transition-subtle"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center border border-[#EBEBE8] rounded-sm">
            <button 
              onClick={() => updateQty(item.id, item.color, item.size, Math.max(1, (Number(item.qty) || 1) - 1))} 
              className="px-3 py-1 text-[#8A8578] hover:text-[#0E0E10] hover:bg-[#EBEBE8] transition-subtle"
              disabled={(Number(item.qty) || 1) <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="px-3 text-sm font-medium w-8 text-center">{item.qty}</span>
            <button 
              onClick={() => updateQty(item.id, item.color, item.size, (Number(item.qty) || 1) + 1)} 
              className="px-3 py-1 text-[#8A8578] hover:text-[#0E0E10] hover:bg-[#EBEBE8] transition-subtle"
            >
              <Plus size={14} />
            </button>
          </div>
          <span className="font-bold text-[#0E0E10]">
            {formatPrice((Number(item.price) || 0) * (Number(item.qty) || 1))}
          </span>
        </div>
      </div>
    </div>
  );
}