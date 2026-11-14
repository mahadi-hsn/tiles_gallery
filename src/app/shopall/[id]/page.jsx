import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";

const TilesDetailsPage = async ({ params }) => {
  const res = await fetch("http://localhost:3000//data.json");
  const tiles = await res.json();
  const { id } = await params;
  const expectedTiles = tiles.find((tile) => tile.id == id);
  const {
    category,
    currency,
    title,
    price,
    material,
    image,
    dimensions,
    description,
  } = expectedTiles;
  console.log(expectedTiles);
  return (
    <div>
      <div className="w-10/12 mx-auto flex gap-16 items-center py-15">
        <div>
          <Image
            className="rounded-t-full h-127.5 border border-[#3A2A20] p-3 "
            src={image}
            alt={title}
            width={450}
            height={50}
          ></Image>
        </div>
        <div className="space-y-5">
          <small className="text-[#B5532F] font-semibold">
            {material} tile · {category} collection
          </small>
          <h1 className="text-6xl font-heading">{title}</h1>
          <p>
            ${" "}
            <span className="font-heading text-3xl text-[#B5532F]">
              {price}
            </span>{" "}
            / sq ft
          </p>
          <p className="opacity-80">
            Stacked arches in terracotta, marigold and cream, inspired by sun-
            <br />
            warmed courtyard walls. Lay it as a feature wall or let it carry a
            whole room.
          </p>
          <div className="space-y-3">
            <p>
              <span className="font-bold">Size:</span> {dimensions}{" "}
            </p>
            <div className="flex gap-2">
              <Button
                className={
                  "bg-transparent border border-[#3A2A20] hover:bg-[#3A2A20] text-[#3A2A20] hover:text-white"
                }
              >
                20 x 12 cm
              </Button>
              <Button
                className={
                  "bg-transparent border border-[#3A2A20] hover:bg-[#3A2A20] text-[#3A2A20] hover:text-white"
                }
              >
                30 x 30 cm
              </Button>
              <Button
                className={
                  "bg-transparent border border-[#3A2A20] hover:bg-[#3A2A20] text-[#3A2A20] hover:text-white"
                }
              >
                60 x 60 cm
              </Button>
            </div>
            <div className="space-y-3">
              <p>
                <span className="font-bold">Finish:</span> Matte
              </p>
              <div className="flex gap-2">
                <Button
                  className={
                    "bg-transparent border border-[#3A2A20] hover:bg-[#3A2A20] text-[#3A2A20] hover:text-white"
                  }
                >
                  Matte
                </Button>
                <Button
                  className={
                    "bg-transparent border border-[#3A2A20] hover:bg-[#3A2A20] text-[#3A2A20] hover:text-white"
                  }
                >
                  Glossy
                </Button>
              </div>
              <div className=" flex gap-4">
                <Button
                  className={
                    "w-full bg-[#B5532F] font-semibold text-lg py-5 flex items-center my-8 "
                  }
                >
                  <span className="text-4xl">
                    <BsCart4 />
                  </span>{" "}
                  <p>Add to Basket</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetailsPage;
