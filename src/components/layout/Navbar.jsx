/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import MiniCartDrawer from "./MiniCartDrawer";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const { items = [], isMounted } = useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 border border-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <Image
                  alt="Banna co Logo"
                  src="/logo.png"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>
              <div className="hidden leading-none sm:block">
                <span className="text-2xl font-black tracking-tight text-banna-black">
                  BANNA<span className="bg-gradient-to-r from-teal-600 to-orange-500 bg-clip-text text-transparent">.Co</span>
                </span>
              </div>
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