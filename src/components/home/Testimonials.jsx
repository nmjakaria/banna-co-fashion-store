/* eslint-disable react/no-unescaped-entities */
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    quote: "The silk Panjabi is an absolute masterpiece. The fabric drapes perfectly, and the subtle embroidery details are incredibly refined. BANNA Co. has nailed the modern minimal aesthetic.",
    author: "Tariq H.",
    role: "Verified Buyer",
  },
  {
    id: 2,
    quote: "I've been searching for a heavyweight t-shirt that holds its shape after multiple washes. This is it. The quality rivals brands that charge three times the price.",
    author: "David M.",
    role: "Verified Buyer",
  },
  {
    id: 3,
    quote: "Customer service was exceptionally helpful when I needed to exchange sizes. The new linen camp shirt arrived in two days and fits flawlessly. A premium experience from start to finish.",
    author: "Samir R.",
    role: "Verified Buyer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF8] border-t border-hairline">
      <Container>
        <SectionHeading 
          title="Word of Mouth" 
          subtitle="Don't just take our word for it."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="p-8 border border-hairline bg-white shadow-md flex flex-col justify-between rounded-xl"
            >
              <div>
                {/* Minimalist quote mark */}
                <span className="text-[#C97A4A] font-serif text-6xl leading-none block mb-4 opacity-50">
                  "
                </span>
                <p className="text-[#0E0E10] text-lg leading-relaxed font-light mb-8 italic">
                  {testimonial.quote}
                </p>
              </div>
              <div>
                <p className="font-bold text-[#0E0E10]">{testimonial.author}</p>
                <p className="text-sm text-[#8A8578] mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}