import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section1 = () => {
  return (
    <div className='w-[80%] mx-auto '>
        <div className='text-center'>
            <h1 className='font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl uppercase '>How it works?</h1>
            <p className='mt-2'>Step By Step Guide</p>
        </div>

        <div className='flex flex-col items-center justify-evenly gap-4 mt-10 w-[60%] mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-10  md:gap-20  w-full py-8'>
                <Image
                src={'/images/pic1.jpg'}
                alt='pic1'
                width={180}
                height={200}
                className='rounded-lg'
                />
                <div className=''>
                    <h1 className='capitalize font-semibold text-2xl'>
                        Discover Your perfect home
                    </h1>
                    <p className=' mt-2 text-sm mb-2'>
                        Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right. 
                    </p>
                    <Link href={"/"} className='underline  text-sm'>
                        Learn More
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-10  md:gap-20  w-full py-8'>
                
                <div className=''>
                    <h1 className='capitalize font-semibold text-2xl'>
                        Discover Your perfect home
                    </h1>
                    <p className=' mt-2 text-sm mb-2'>
                        Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right. 
                    </p>
                    <Link href={"/"} className='underline  text-sm'>
                        Learn More
                    </Link>
                </div>
                <Image
                src={'/images/pic2.png'}
                alt='pic1'
                width={180}
                height={200}
                className='rounded-lg'
                />
            </div>
            <div className='flex flex-col md:flex-row items-center gap-10  md:gap-20  w-full py-8'>
                <Image
                src={'/images/pic3.jpg'}
                alt='pic1'
                width={180}
                height={200}
                className='rounded-lg'
                />
                <div className=''>
                    <h1 className='capitalize font-semibold text-2xl'>
                        Discover Your perfect home
                    </h1>
                    <p className=' mt-2 text-sm mb-2'>
                        Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right. 
                    </p>
                    <Link href={"/"} className='underline  text-sm'>
                        Learn More
                    </Link>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-10  md:gap-20  w-full py-8'>
                
                <div className=''>
                    <h1 className='capitalize font-semibold text-2xl'>
                        Discover Your perfect home
                    </h1>
                    <p className=' mt-2 text-sm mb-2'>
                        Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right. 
                    </p>
                    <Link href={"/"} className='underline  text-sm'>
                        Learn More
                    </Link>
                </div>
                <Image
                src={'/images/pic4.png'}
                alt='pic1'
                width={300}
                height={250}
                className='rounded-lg'
                />
            </div>
        </div>
    </div>
  )
}

export default Section1