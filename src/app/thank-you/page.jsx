import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-banna-white py-20">
      <Container className="max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle size={64} className="text-green-600" />
        </div>
        
        <h1 className="font-serif text-4xl font-bold text-banna-black mb-4">
          Thank you for your order!
        </h1>
        
        <p className="text-banna-muted mb-8 text-lg">
          We have received your order and are getting it ready. You will receive an email confirmation shortly.
        </p>
        
        <Link 
          href="/" 
          className="inline-block bg-banna-black text-white px-8 py-4 font-medium hover:bg-[#2A2A2C] transition-subtle"
        >
          Continue Shopping
        </Link>
      </Container>
    </div>
  );
}