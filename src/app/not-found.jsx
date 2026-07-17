import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 bg-[#FAFAF8]">
      <Container className="text-center">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#0E0E10] mb-6">404</h1>
        <h2 className="text-xl md:text-2xl font-medium text-[#0E0E10] mb-4">
          Page not found
        </h2>
        <p className="text-[#8A8578] mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="px-8 py-4 bg-[#0E0E10] text-[#FAFAF8] hover:bg-[#C97A4A] transition-subtle font-medium"
          >
            Back to Home
          </Link>
          <Link 
            href="/products" 
            className="px-8 py-4 border border-[#EBEBE8] text-[#0E0E10] hover:bg-[#EBEBE8] transition-subtle font-medium"
          >
            Browse Products
          </Link>
        </div>
      </Container>
    </div>
  );
}