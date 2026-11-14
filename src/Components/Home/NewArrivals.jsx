import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";

const NewArrivals = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const tiles = await res.json();
  console.log(tiles);
  return (
    <div className="mt-30">
      <div className="space-y-5">
        <p className="text-sm text-[#B5532F] font-bold">JUST LANDED</p>
        <div className="flex justify-between items-end">
          <h1 className="font-heading text-4xl">New arrivals</h1>
          <div>
            <Link
              className="flex items-center text-sm text-[#B5532F] font-bold"
              href={"shopall"}
            >
              <span>See the full range</span>
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-15">
        {tiles.slice(0 , 4).map((tile, ind) => (
          <div key={ind}>
            <div className="border p-3 rounded-4xl shadow">

              <Image
                className="h-77.5 rounded-4xl mb-3"
                src={tile.image}
                alt={tile.title}
                width={500}
                height={300}
                ></Image>
              <div className="">
                <p className="text-sm ">{tile.material} · {tile.dimensions}</p>
                <h4 className="font-heading text-xl">{tile.title}</h4>
                    <p>$ <span className="font-heading text-xl text-[#B5532F]">{tile.price}</span> / sq ft</p>
              </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
