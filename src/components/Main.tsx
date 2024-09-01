import React from 'react'
import Image from 'next/image'
import Header from './Header'
import { CoverDemo } from './comps/Cover'
import { BorderBeam } from "@/components/ui/borderbeam";
import { TimelineDemo } from './comps/scroll';
import { ScrollBasedVelocityDemo } from './comps/veocity';
import { AppleCardsCarouselDemo } from './comps/carousel';
function Main() {
  return (
    <main className=''>
        <div className='h-auto w-full bg-black'>
        <div className="relative w-full h-screen opacity-100">
        <Image 
        
          src='/frontpage/jkcar.png'
          alt='BMW Frontpage'
          layout='fill'
          objectFit='cover'
          className="z-0 opacity-100"
        />
       

         <div className='absolute inset-0 h-1/2  flex items-end justify-center'> <CoverDemo/></div>
        
      </div>
      
      <div className='h-[600px] p-5 items-center w-full flex justify-evenly mt-4'>
        <div className='p-9 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8' style={{
           backgroundImage: `url('/frontpage/pngtree-rusted-cars-in-the-jungle-of-colombia-picture-image_2472711.jpg')`,
           backgroundSize: 'cover', // Ensures the image covers the entire div
           backgroundPosition: 'center', // Centers the image
           backgroundRepeat: 'no-repeat' ,
           
           
        }}>
          <div className='flex items-center justify-center text-3xl font-bold'>Variety of Cars</div>
          <div className='flex items-center justify-center'>At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
        <div className='p-9 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8'>
          <div className='flex items-center justify-center text-3xl font-bold'>Competitive Pricing</div>
          <div className='flex items-center justify-center' >At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
        <div className='p-9 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8'>
          <div className='flex items-center justify-center text-3xl font-bold'>24/7 support</div>
          <div className='flex items-center justify-center '>At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        
      <div className='relative h-[400px] w-2/3 text-white m-5 p-8'>
      <div className='flex h-full w-full'>
        <div className='h-full w-full flex flex-col gap-5 justify-center'>
        <div className='text-3xl font-bold'>Discover a New Level of Comfort</div>
        <div>We're here to make the car-buying process as easy and stress-free as possible. Contact us today to schedule a test drive or to learn more about our financing and service options.</div>
        <button className='border-2 border-white h-fit w-fit p-2 pl-6 pr-6 rounded-xl'>Explore</button>
        </div>
        <div className='h-full w-full flex items-center justify-center'>
          <Image
          src='/frontpage/pexels-mikebirdy-100650.jpg'
          alt=''
          height={500}
          width={500}
          />
        </div>
      </div>
      
      <BorderBeam/>
      </div>
      </div>

      <div className='bg-black'>
      <TimelineDemo/>
      <div className='h-auto'>
      <ScrollBasedVelocityDemo/>
      </div>
        <div>
          <AppleCardsCarouselDemo/>
        </div>

      </div>
        </div>
    </main>
  )
}

export default Main