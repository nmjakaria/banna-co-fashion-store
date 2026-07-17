"use client";

import { useCart } from "@/context/CartContext";
import Container from "@/components/ui/Container";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  // Destructure 'items' and 'updateQty' to match your CartContext
  const { items = [], updateQty, removeItem } = useCart();

  // Safely calculate subtotal using 'qty' instead of 'quantity'
  const subtotal = items.reduce((acc, item) => acc + (Number(item?.price) || 0) * (Number(item?.qty) || 1), 0);

  return (
    <div className="min-h-screen py-16 md:py-24 bg-[#FAFAF8]">
      <Container>
        <h1 className="font-serif text-4xl font-bold mb-12">Shopping Bag</h1>
        
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {items.map((item) => (
                <CartItem 
                  key={`${item.id}-${item.color}-${item.size}`} 
                  item={item} 
                  updateQty={updateQty} 
                  removeItem={removeItem} 
                />
              ))}
            </div>
            <div>
              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}