import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import styles from './Hero.module.css'
import Image from "next/image";
const Hero = () => {
  return (
    <div className="">
      <div className=" text-center mt-6 pt-4 relative">
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl uppercase">
          Connecting dreams to reality
        </h1>
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl uppercase text-[#4b9eec] mt-2">
          Your premier
        </h1>
        <h1 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl uppercase mt-2">
          Real estate marketplace
        </h1>
        <p className="mt-2">Where every search ends with a home</p>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-5">
          <button className="rounded-full lg:px-8 lg:py-2 md:px-4 md:py-2 px-4 py-1 capitalize bg-[#4b9eec] text-gray-100 flex items-center justify-between gap-4">
            Find Your Home
            <ArrowForwardIcon className=""/>
          </button>
          <button className="rounded-full lg:px-8 lg:py-2 md:px-4 md:py-2 px-4 py-1 capitalize bg-[#4b9eec] text-gray-100 flex items-center justify-between gap-4">
            List your property
            <ArrowForwardIcon className=""/>
          </button>
        </div>
      </div>
      
      <div className="relative w-full h-full">
      
      <div className="z-[1000000000] relative flex items-center justify-center mt-0 md:mt-[-10rem]">
        <Image
          src={'/images/banner.png'}
          alt="banner"
          width={1000}
          height={500}
        />
      </div>
      <div className="absolute top-[7rem] sm:top-[15rem] md:top-[20rem] w-full bg-gray-100 h-[40%] rounded-t-[80px] z-0"></div>
      
    </div>
    </div>
  );
};

export default Hero;
