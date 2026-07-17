import CategoryStrip from "@/components/home/CategoryStrip";
import Hero from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <CategoryStrip />
      </main>
    </div>
  );
}
