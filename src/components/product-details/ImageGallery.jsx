"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative w-16 h-20 md:w-20 md:h-24 overflow-hidden border ${
              activeImage === idx ? "border-[#0E0E10]" : "border-[#EBEBE8]"
            }`}
          >
            <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
          </button>
        ))}
      </div>
      {/* Active Image */}
      <div className="relative flex-1 aspect-[3/4] bg-[#EBEBE8]">
        <Image src={images[activeImage]} alt="Product View" fill className="object-cover" priority />
      </div>
    </div>
  );
}