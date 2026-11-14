import Image from "next/image";
import React from "react";
import logo from "@/Assets/logo.png";
import { BsInstagram } from "react-icons/bs";
import { LuFacebook } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="bg-[#3A2A20] text-white">
      <div className="w-10/12 mx-auto">

       <div className="flex justify-between pt-18 pb-14.5 ">
         <div className="space-y-3">
          <div className="flex items-center gap-3 ">
            <Image src={logo} alt="logo" width={38} height={38}></Image>
            <h1 className="font-heading text-2xl font-semibold ">
              Terra Atelier
            </h1>
          </div>
          <p className="opacity-80">
            Warm, earthy tiles for walls, floors and every corner <br /> in between.
          </p>
          <div className=" flex items-center gap-3">
            <span className="border rounded-full p-2">
              <BsInstagram />
            </span>{" "}
            <span className="border rounded-full p-2">
              <LuFacebook />
            </span>
          </div>
        </div>

        <div>
            <h3 className="font-heading text-lg mb-2">Shop</h3>
            <ul className="space-y-1 text-sm opacity-80">
                <li>All Shop</li>
                <li>Ceramic</li>
                <li>Porcelain</li>
                <li>Marble</li>
                <li>Granite</li>
            </ul>
        </div>

        <div>
            <h3 className="font-heading text-lg mb-2">Account</h3>
            <ul className="space-y-1 text-sm opacity-80">
                <li>Log in</li>
                <li>Create account</li>
                <li>Showroom</li>
            </ul>
        </div>

        <div>
            <h3 className="font-heading text-lg mb-2">Contact</h3>
            <ul className="space-y-1 text-sm opacity-80">
                <li>+8801234567890</li>
                <li>terra@atelier.com</li>
                <li>Uttara , Dhaka-1230</li>
            </ul>
        </div>
       </div>
       <div className="opacity-50 space-y-3 mb-8 ">
        <hr />
        <p className="text-sm">&copy; 2026 Terra Atelier. All rights reserved.</p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
