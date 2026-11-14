import { Button } from "@heroui/react";
import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhone, MdOutlineWatchLater, MdWatchLater } from "react-icons/md";

const Booking = () => {
  return (
    <div className="py-20 flex gap-60 items-center">
      <div className="space-y-5 ">
        <h1 className="font-heading text-5xl">
          Come and touch the <br /> textures.
        </h1>
        <p className="opacity-80">
          Visit our showroom, lay tiles side by side and take free <br />{" "}
          samples home to see them in your own light.
        </p>
      </div>
      <div className="bg-[#EADBC4] p-9 space-y-3 rounded-2xl w-130">
        <div className="flex items-center gap-3">
          <span className="text-[#9A4424]"><GrLocation /></span> <p>Uttara Dhaka - 1230</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#9A4424]"><MdOutlineWatchLater /></span> <p>Sat - Thu | 9am to 5pm</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#9A4424]"><MdOutlinePhone /></span> <p>+8801234567891</p>
        </div>
        <Button className={'text-white py-5 mt-4 bg-[#9A4424] hover:bg-[#79351c] transition-colors duration-200 '}>Book a free visit</Button>
      </div>
    </div>
  );
};

export default Booking;
