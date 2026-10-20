import Hero from "@/components/hero";
import Marquee from "@/components/Marquee";
import PriceUp from "@/components/priceUp";
import PriceDown from "@/components/priceDown"
import Image from "next/image";
import Allproducts from "@/components/allproducts";

export default function Home() {
  return (
    <div>
     <Marquee></Marquee>
     <Hero></Hero>
     <PriceUp></PriceUp>
     <PriceDown></PriceDown>
     <Allproducts></Allproducts>
     
    </div>
  );
}
