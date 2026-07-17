/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MiniCartDrawer from "./MiniCartDrawer";

export default function Navbar() {
  const pathname = usePathname();
  const { items = [], isMounted } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bulletproof safety check to prevent the React NaN error
  // const safeTotalItems = Number(totalItems) || 0;

  // Listen for custom events to open the drawer (e.g., from the Add to Cart button)
  useEffect(() => {
    const handleOpenDrawer = () => setIsDrawerOpen(true);
    window.addEventListener("open-cart-drawer", handleOpenDrawer);
    return () => window.removeEventListener("open-cart-drawer", handleOpenDrawer);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    {name: "About Us", href: "/about"},
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAFAF8]/90 backdrop-blur-md border-b border-hairline">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -ml-2 text-[#0E0E10] hover:text-[#C97A4A] transition-subtle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-[#0E0E10] tracking-tight">
            BANNA Co.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-subtle hover:text-[#C97A4A] ${
                  pathname === link.href ? "text-[#C97A4A] border-b-2 border-b-banna-accent" : "text-[#8A8578]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center rounded-full bg-secondary-content/60 border-2 border-banna-accent/50">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative p-2 text-[#0E0E10] hover:text-[#C97A4A] transition-subtle"
              aria-label="Open cart"
            >
              <ShoppingBag size={24} strokeWidth={1.5} />
              
              {/* Safely render the badge only if we have mounted and have a valid count */}
              {isMounted && items.length > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C97A4A] text-[10px] font-bold text-white shadow-sm">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div 
          className={`md:hidden absolute top-16 left-0 w-full bg-[#FAFAF8] border-b border-hairline transition-all duration-300 ease-in-out origin-top ${
            isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 space-y-6 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-serif tracking-wide ${
                  pathname === link.href ? "text-[#C97A4A] font-bold" : "text-[#0E0E10]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mini Cart Drawer */}
      <MiniCartDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}