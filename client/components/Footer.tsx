import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Instagram } from '@mui/icons-material';
const Footer = () => {
  return (
    <div className='bg-[#070b36]  text-[#9e9d9d]'>
    <div className='w-[80%] mx-auto pt-20 pb-10'>
        <div className='flex flex-col md:flex-row items-center  gap-4 '>
            <div>
            <h1 className="lg:text-2xl md:text-sm font-extralight text-white ">
          {" "}
          <span className="font-bold">XYZ</span> <span className='italic'>INDUSTRIES</span>
        </h1>
                <p className='mb-2 md:w-[50%] mt-2'>XYZ Industries: Where real estate dreams meet seamless transactions, transforming aspirations into achievements.</p>
                <button className='mt-5 border border-white rounded-full px-4 py-2 text-white uppercase gap-5 flex items-center'>
                    Explore 
                    <ArrowForwardIcon/>
                </button>
               
            </div>
            <div className='flex flex-col md:flex-row gap-4  w-full'>
            <div className='px-4'>
                <h1 className='text-white font-semibold  mb-4 text-sm'>Quick Links</h1>
                <p className='mb-2'>About Us</p>
                <p className='mb-2'>Blog</p>
                <p className='mb-2'>Testimonials</p>
                <p className='mb-2'>Terms and Conditions</p>
                <p className='mb-2'>Privacy Policy</p>
                <p className='mb-2'>Site Map</p>
            </div>
            <div className='px-4'>
                <h1 className='text-white font-semibold  mb-4 text-sm'>Customer Support</h1>
                <p className='mb-2'>Feedback</p>
                <p className='mb-2'>Report a problem</p>
                <p className='mb-2'>Request a Call Back</p>
            </div>
            <div className='px-4'>
                <h1 className='text-white font-semibold  mb-4 text-sm'>Subscribe Us</h1>
                <p className='mb-2'>Subscribe to our weekly newsletter</p>
                <form action="">
                    <input placeholder='Email Id' type='text' name='email' className='rounded-lg px-3 py-2 text-[15px] w-full'/>
                    <button type='submit' className='flex items-center justify-center bg-[#4b9eec] w-full rounded-lg px-3 py-2 text-[15px] text-white mt-2'>Subscribe</button>
                </form>
                
            </div>
            </div>
            
            
        </div>
        <hr className='mt-10 border-t border-gray-300' />
        <div className='flex flex-col md:flex-row items-center justify-between mt-5'>
            <div className='flex items-center gap-2'>
               <button><YoutubeIcon/></button> 
               <button><TwitterIcon/></button> 
               <button><Instagram/></button> 
               <button><FacebookIcon/></button> 
            </div>
            <div className='flex gap-8 items-center'>
            <div className='flex items-center gap-4'>
                <h1>Terms</h1>
                <div className='border-r border-gray-400 h-6'></div>
                
                <h1>Privacy </h1>
            </div>
                
                <p className='text-[15px]'> &copy;2024 XYZ</p>
                </div>
        </div>
    </div>
</div>
  )
}

export default Footer