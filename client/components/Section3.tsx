import React from 'react'
import styles from './Section3.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const Section3 = () => {
  return (
    <div className='relative bg-[#bbe3f5] pt-[10rem] w-full h-[150vh]  mb-20 flex flex-col justify-center items-center'>
     <div className='z-[10]'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold uppercase'>Your <span className='font-light'> trusted</span> partner in </h1>
        <h1 className='text-3xl font-bold uppercase'>the future <span className='font-light'> of housing</span>  </h1>
        <p className='mt-4 text-[14px] text-center mb-8'>
          Our partnerships with governmental and local banks ensure that our housing prices are affordable enough for our target market.
        </p>
        <button className="rounded-full lg:px-8 lg:py-2 md:px-4 md:py-2 px-4 py-1 capitalize bg-[#4b9eec] text-gray-100 flex items-center justify-between gap-4">
          Join Our Community today
          <ArrowForwardIcon className=""/>
        </button>
      </div>
    </div>
    <div className={``}>
        <Image
        src={'/images/house2.png'}
        alt='image'
        width={950}
        height={500}
        />
    </div>

   
  
    {/* Second div placed at the center of the parent */}
  </div>
  
  

  )
}

export default Section3