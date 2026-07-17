/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { toast } from "react-hot-toast";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext"; // Assuming a Cart Context exists
import Container from "@/components/ui/Container";
import ImageGallery from "@/components/product-details/ImageGallery";
import RatingStars from "@/components/product-details/RatingStars";
import ColorSwatchPicker from "@/components/product-details/ColorSwatchPicker";
import SizeSelector from "@/components/product-details/SizeSelector";
import QuantityStepper from "@/components/product-details/QuantityStepper";
import RelatedProducts from "@/components/product-details/RelatedProducts";
import { formatPrice } from "@/lib/formatPrice";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { addItem, openCart } = useCart();
  const product = products.find((p) => String(p.id) === String(id));

  // Initial states
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Redirect to 404 if product doesn't exist
  if (!product) {
    notFound();
  }

  // Set default selections on load
  useEffect(() => {
    if (product.colors?.length > 0) setSelectedColor(product.colors[0].name);
  }, [product]);

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addItem({ ...product, selectedColor, selectedSize, quantity });
    toast.success(`${product.name} added to cart.`);
    openCart();
  };

  const isButtonDisabled = !product.inStock || !selectedSize;

  return (
    <div className="bg-[#FAFAF8] py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <ImageGallery images={product.images} />

          {/* Details */}
          <div className="flex flex-col">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0E0E10] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl font-bold text-[#0E0E10]">{formatPrice(product.price)}</span>
              <RatingStars rating={product.rating} />
            </div>

            <p className="text-[#8A8578] leading-relaxed mb-8">{product.description}</p>

            <div className="space-y-8 mb-10">
              <ColorSwatchPicker
                colors={product.colors}
                selected={selectedColor}
                onSelect={setSelectedColor}
              />
              <SizeSelector
                sizes={product.sizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
              />
              <QuantityStepper
                quantity={quantity}
                setQuantity={setQuantity}
              />
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`w-full py-4 font-medium transition-subtle rounded-md ${isButtonDisabled
                  ? "bg-[#EBEBE8] text-[#8A8578] cursor-not-allowed"
                  : "bg-[#0E0E10] text-white hover:bg-[#C97A4A]"
                }`}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>

        {/* Related */}
        <RelatedProducts category={product.category} currentProductId={product.id} />
      </Container>
    </div>
  );
}