import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";

const tilesCategory = async () => {
  const res = await fetch("http://localhost:3000//category.json");
  const data = await res.json();
  return data;
};
const ShopBySpace = async () => {
  const categories = await tilesCategory();
  return (
    <div className="mt-30">
      <div className="space-y-5">
        <p className="text-sm text-[#B5532F] font-bold">SHOP BY SPACE</p>
        <div className="flex justify-between items-end">
          <h1 className="font-heading text-4xl">Find your rooms mood</h1>
          <div>
            <Link
              className="flex items-center text-sm text-[#B5532F] font-bold"
              href={"shopall"}
            >
              <span>View all tiles</span>
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-15">
        {categories.map((category, ind) => (
          <div key={ind}>
            <div>

              <Image
                className="h-105.5 rounded-t-full mb-3"
                src={category.image}
                alt={category.name}
                width={500}
                height={300}
                ></Image>
              <div className="flex items-center justify-between">
                <h4 className="font-heading text-xl">{category.name}</h4>
                <span>
                  <FaArrowRightLong />
                </span>
              </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ShopBySpace;
