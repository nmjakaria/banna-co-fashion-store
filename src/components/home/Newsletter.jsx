"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Container from "../ui/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate an API call
    setTimeout(() => {
      toast.success("Welcome to the club. Check your inbox.");
      setEmail("");
      setIsLoading(false);
    }, 800);
  };

  return (
    <section className="py-24 bg-[#EBEBE8]">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0E0E10] mb-4 tracking-tight">
            Join the inner circle.
          </h2>
          <p className="text-[#8A8578] text-base md:text-lg mb-10">
            Subscribe for early access to new collections, exclusive editorial content, and 10% off your first order.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 bg-[#FAFAF8] border border-hairline px-6 py-4 text-[#0E0E10] focus:outline-none focus:border-[#C97A4A] focus:ring-1 focus:ring-[#C97A4A] transition-subtle rounded-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#0E0E10] hover:bg-[#C97A4A] text-[#FAFAF8] px-8 py-4 font-medium transition-subtle whitespace-nowrap disabled:opacity-70 flex items-center justify-center min-w-35"
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}