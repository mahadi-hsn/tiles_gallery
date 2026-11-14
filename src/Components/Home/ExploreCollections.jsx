import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import Home_selection1 from "@/Assets/Home-selection 1.png"
import Home_selection2 from "@/Assets/Home-selection 2.png"
import Home_selection3 from "@/Assets/Home-selection 3.png"

const ExploreCollections = () => {
  return (
    <div className="bg-[#B5532F] mt-24">
      <div className="w-10/12 mx-auto py-20 flex gap-30 items-center">
        <div className="space-y-8">
          <p className="text-sm text-[#EACA97] font-bold">OUR WAY WITH PATTERN</p>
          <h1 className="text-white font-heading text-6xl">Pattern is a feeling, not <br /> just a print.</h1>
          <p className="text-white opacity-90">
            Our collections borrow from desert arches, sun-baked <br /> courtyards and
            woven rattan. Each design is glazed in calm, <br /> earthy tones so it
            softens a room instead of shouting in it.
          </p>
          <Button className={'bg-slate-200 text-[#3A2A20] font-semibold hover:bg-white transition-colors duration-500'}>Explore collections</Button>
        </div>
        <div className="flex items-end">
          <Image
            className="w-37.5 h-75 p-3 rounded-t-full"
            src={Home_selection3}
            alt="banner image"
            width={440}
            height={500}
          ></Image>
          <Image
            className="w-38.5 h-95 p-3 rounded-t-full"
            src={Home_selection1}
            alt="banner image"
            width={440}
            height={500}
          ></Image>
          <Image
            className="w-37.5 h-62.5 p-3 rounded-t-full"
            src={Home_selection2}
            alt="banner image"
            width={440}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default ExploreCollections;
