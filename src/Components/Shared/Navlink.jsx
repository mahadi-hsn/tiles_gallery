"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlink = ({ item }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <li
        className={`${pathName == item.path ? "border-b border-b-[#9E4B2C] text-[#9E4B2C]" : ""}`}
      >
        <Link href={item.path}>{item.name}</Link>
      </li>
    </div>
  );
};

export default Navlink;
