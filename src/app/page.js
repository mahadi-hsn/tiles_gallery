import Banner from "@/Components/Home/Banner";
import Samples from "@/Components/Home/Samples";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-10/12 mx-auto">
      <Banner></Banner>
      <Samples></Samples>
    </div>
  );
}
