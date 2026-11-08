import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import bannerImg1 from "@/Assets/banner-image1.png"
import bannerImg2 from "@/Assets/banner-image2.png"
import { FaArrowRightLong } from 'react-icons/fa6';
const Banner = () => {
    return (
        <div className='flex items-center justify-between mt-8'>
            <div className='space-y-7 w-155.5'>
                <p className='text-sm text-[#9A4424]'>Ceramic · Porcelain · Terracotta-look</p>
                <h1 className='font-heading text-7xl text-[#3A2A20]'>Tiles that make a <br /> house feel like <br /> <span className='text-[#9A4424] italic'>home.</span></h1>
                <p className='text-[#3A2A20] opacity-80'>Earthy colours, hand-drawn patterns and soft matte <br /> glazes, made to bring warmth to every wall and floor.</p>
                <div className='flex gap-3'>
                    <Button className={'bg-[#9A4424] font-semibold hover:bg-[#3A2A20] transition-colors duration-500'}>Shop all tiles <FaArrowRightLong /></Button>
                    <Button variant='outline' className={'font-semibold hover:bg-[#3A2A20] hover:text-white transition-colors duration-500'}>Order free samples</Button>
                </div>
            </div>

            <div className='relative'>
                <Image className='border border-[#9A4424] p-3
                rounded-bl-2xl rounded-br-2xl rounded-t-full' src={bannerImg1} alt='banner image' width={440} height={500}></Image>
                <Image className='absolute top-105 -left-3.5 p-1
                 rounded-full' src={bannerImg2} alt='banner image' width={150} height={150}></Image>
            </div>
        </div>
    );
};

export default Banner;