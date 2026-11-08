import React from "react";
import Marquee from "react-fast-marquee";
import { FaTruck } from "react-icons/fa";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { SiTicktick } from "react-icons/si";
import { TbRulerMeasure } from "react-icons/tb";

const Samples = () => {
  return (
    <div className="bg-[#EADBC4] w-full my-18 py-8">
      <Marquee speed={70}>
        <div className="flex gap-15">
          <div className="flex gap-4">
            <div className="text-3xl text-[#9A4424]">
              <HiMiniRectangleGroup />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-xl">Free sample tiles</h4>
              <p>Feel the glaze in your own light before you buy.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-[#9A4424]">
              <FaTruck />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-xl">Doorstep delivery</h4>
              <p>Careful packing and tracked orders.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl text-[#9A4424]">
              <TbRulerMeasure />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-xl">Measuring help</h4>
              <p>We estimate how many boxes your room needs.</p>
            </div>
          </div>
          <div className="flex gap-4 mr-15">
            <div className="text-3xl text-[#9A4424]">
              <SiTicktick />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-xl">Quality promise</h4>
              <p>Every batch checked for shade and size.</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Samples;
