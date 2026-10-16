// import React from 'react';
// import Image from 'react'

// const hero = () => {
//     return (
//         <div>
//            <span >
//                 <h1>today date section </h1>
//                 <h1>আজকের বাজারের দাম এক নজরে</h1>
//                 <h1>চাল,দাল,তেল,সব্জি,ডিম,মঅস্লা সবকিছুর আপডেট Info এক সাথে,এক জ্যগ্য
//                 </h1>
//                 <button>
//                     সব প্নন দেখন
//                 </button>
//            </span>
//            <span>
//             <Image src={"/bazar/public/bazar-hero.png"}>

//             </Image>
//            </span>
            
//         </div>
//     );
// };


import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 px-5 py-12 sm:px-8 md:py-16 lg:flex-row lg:gap-12 lg:py-20">

        {/* Left Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <p className="mb-4 text-sm font-medium text-blue-200 sm:text-base">
            আজকের বাজারদর
          </p>

          <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            আজকের বাজারের দাম
            <span className="mt-2 block text-yellow-400">
              এক নজরে
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-blue-100 sm:text-lg lg:mx-0">
            চাল, ডাল, তেল, সবজি, ডিম ও মসলাসহ
            নিত্যপ্রয়োজনীয় সব পণ্যের আপডেটেড
            বাজারদর জানুন এক জায়গায়।
          </p>

          <button className="rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-blue-950 transition hover:bg-yellow-300 sm:px-8">
            সব পণ্যের দাম দেখুন
          </button>

        </div>

        {/* Right Image */}
        <div className="w-full max-w-md lg:w-1/2 lg:max-w-none">
          <Image
            src="/bazar-hero.png"
            alt="নিত্যপ্রয়োজনীয় পণ্যের বাজার"
            width={600}
            height={450}
            priority
            className="h-auto w-full rounded-2xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;