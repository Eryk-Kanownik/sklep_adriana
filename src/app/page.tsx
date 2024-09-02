import HeroSection from "@/components/sections/home/HeroSection";
import LatestProducts from "@/components/sections/home/LatestProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestProducts />
    </main>
  );
}
