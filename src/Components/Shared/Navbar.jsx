import Image from "next/image";
import React from "react";
import logo from "@/Assets/logo.png";
import Link from "next/link";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Navlink from "./Navlink";
const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop All",
      path: "/shopall",
    },
    {
      name: "Collections",
      path: "/collections",
    },
    {
      name: "Inspiration",
      path: "/inspiration",
    },
    {
      name: "Showroom",
      path: "/showroom",
    },
  ];

  return (
    <div className="border-b">
      <p className="bg-[#5C6B50] text-center text-white p-2 text-sm">
        Free sample tiles with every showroom visit · Delivery across Bangladesh
      </p>

      <div className="flex justify-between items-center w-10/12 mx-auto py-3">
        <div className="flex items-center justify-between w-214">
          <div className="flex items-center gap-3 justify-center">
            <Image src={logo} alt="logo" width={38} height={38}></Image>
            <h1 className="font-heading text-2xl font-semibold">
              Terra Atelier
            </h1>
          </div>

          <div>
            <ul className="flex gap-6 font-semibold">
              {navItems.map((item, ind) => (
                <Navlink key={ind} item={item}></Navlink>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4 text-xl font-bold">
          <CiSearch />
          <CiUser />
          <IoBagOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
