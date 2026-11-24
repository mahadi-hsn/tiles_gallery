import Image from "next/image";
import Link from "next/link";
import React from "react";
import bannerImg1 from "../../../Assets/banner-image1.png";
import { FaAngleRight, FaArrowRightLong } from "react-icons/fa6";

const ShopAllPage = async () => {
  const res = await fetch("http://localhost:3000//data.json");
  const tiles = await res.json();
  console.log(tiles);

  return (
    <>
      <div className="bg-[#EADBC4] ">
        <div className="w-10/12 mx-auto flex items-center justify-between py-7">
          <div>
            <h1 className="font-heading text-6xl">All tiles</h1>
            <p className="text-lg opacity-80">
              Hand-drawn patterns and soft glazes for every wall, floor and{" "}
              <br /> corner of your home.
            </p>
          </div>
          <div>
            <Image
              className="border border-[#9A4424] p-3 rounded-bl-2xl rounded-br-2xl rounded-t-full"
              src={bannerImg1}
              alt="banner image"
              width={190}
              height={260}
            ></Image>
          </div>
        </div>
      </div>
      <div className="my-30 w-10/12 mx-auto">
        <div className="grid grid-cols-4 gap-5">
          {tiles.map((tile, ind) => (
            <div key={ind}>
              <Link href={`/shopall/${tile.id}`}>
                <div className="border p-3 rounded-4xl shadow">
                  <Image
                    className="h-77.5 rounded-4xl mb-3"
                    src={tile.image}
                    alt={tile.title}
                    width={500}
                    height={300}
                  ></Image>
                  <div className="">
                    <p className="text-sm ">
                      {tile.material} · {tile.dimensions}
                    </p>
                    <h4 className="font-heading text-xl">{tile.title}</h4>
                    <p>
                      ${" "}
                      <span className="font-heading text-xl text-[#B5532F]">
                        {tile.price}
                      </span>{" "}
                      / sq ft
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAllPage;
