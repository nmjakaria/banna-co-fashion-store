"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  // Framer motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom easing for premium feel
    },
  };

  return (
    <section className="relative h-[85vh] min-h-150 w-full bg-[#0E0E10] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
          alt="BANNA Co. Editorial Fashion"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0E0E10]/80 via-transparent to-[#0E0E10]/30" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 h-full flex flex-col justify-end pb-24 md:pb-32">
        <motion.div 
          className="max-w-2xl text-[#FAFAF8]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Wear the <br />
            <span className="text-[#C97A4A] italic pr-2">moment.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl font-light text-[#EBEBE8] mb-10 max-w-lg leading-relaxed"
          >
            A curation of minimal, high-quality essentials designed to elevate your everyday wardrobe. Redefining modern classics.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center bg-[#C97A4A] hover:bg-[#b0673b] text-[#FAFAF8] px-8 py-4 font-medium transition-subtle hover:scale-[1.02] active:scale-100"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}