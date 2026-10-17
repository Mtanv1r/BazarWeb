import Hero from "@/components/hero";
import Marquee from "@/components/Marquee";
import PriceUp from "@/components/priceUp";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Marquee></Marquee>
     <Hero></Hero>
     <PriceUp></PriceUp>
    </div>
  );
}
