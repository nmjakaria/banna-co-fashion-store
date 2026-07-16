/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function MiniCartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQty, subtotal, isMounted } = useCart();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Framer motion variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    },
    exit: { 
      x: "100%", 
      transition: { type: "spring", stiffness: 300, damping: 30 } 
    },
  };

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-[#0E0E10]/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#FAFAF8] shadow-2xl flex flex-col"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
              <h2 className="font-serif text-xl font-bold text-[#0E0E10]">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 text-[#8A8578] hover:text-[#0E0E10] transition-subtle rounded-full hover:bg-[#EBEBE8]"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 no-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EBEBE8] flex items-center justify-center mb-4">
                    <Trash2 size={24} className="text-[#8A8578]" />
                  </div>
                  <p className="text-[#0E0E10] font-medium text-lg">Your cart is empty.</p>
                  <p className="text-[#8A8578] text-sm max-w-[200px]">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-[#C97A4A] font-medium hover:underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {items.map((item) => (
                    <li key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative h-24 w-20 flex-shrink-0 bg-[#EBEBE8] rounded-md overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm font-medium text-[#0E0E10] line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-sm font-bold text-[#0E0E10] ml-4">
                              {formatPrice(item.price * item.qty)}
                            </p>
                          </div>
                          <p className="mt-1 text-xs text-[#8A8578]">
                            {item.color} | {item.size}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-hairline rounded-sm">
                            <button
                              onClick={() => updateQty(item.id, item.color, item.size, Math.max(1, item.qty - 1))}
                              className="px-2 py-1 text-[#8A8578] hover:text-[#0E0E10] transition-subtle"
                              disabled={item.qty <= 1}
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-xs font-medium w-6 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.color, item.size, item.qty + 1)}
                              className="px-2 py-1 text-[#8A8578] hover:text-[#0E0E10] transition-subtle"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id, item.color, item.size)}
                            className="text-xs text-[#8A8578] hover:text-red-500 transition-subtle underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer / Checkout Actions */}
            {items.length > 0 && (
              <div className="border-t border-hairline bg-[#FAFAF8] px-6 py-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#8A8578]">Subtotal</span>
                  <span className="font-bold text-lg text-[#0E0E10]">{formatPrice(subtotal)}</span>
                </div>
                <p className="text-xs text-[#8A8578] mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                
                <div className="flex flex-col gap-3">
                  <Link
                    href="/cart"
                    onClick={onClose}
                    className="btn btn-outline border-[#0E0E10] text-[#0E0E10] hover:bg-[#0E0E10] hover:text-white w-full rounded-none"
                  >
                    View Cart
                  </Link>
                  <button className="btn bg-[#C97A4A] hover:bg-[#b0673b] border-none text-white w-full rounded-none flex items-center justify-center gap-2">
                    Checkout <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}