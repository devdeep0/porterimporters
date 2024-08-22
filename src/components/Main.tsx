import React from 'react'
import Image from 'next/image'
import Header from './Header'
import { CoverDemo } from './comps/Cover'
import { BorderBeam } from "@/components/ui/borderbeam";
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
      
      <div className='h-[300px] p-5 items-center w-full flex justify-evenly'>
        <div className='p-7 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8' style={{
           backgroundImage: `url('/frontpage/pngtree-rusted-cars-in-the-jungle-of-colombia-picture-image_2472711.jpg')`,
           backgroundSize: 'cover', // Ensures the image covers the entire div
           backgroundPosition: 'center', // Centers the image
           backgroundRepeat: 'no-repeat' ,
           
           
        }}>
          <div className='flex items-center justify-center text-3xl font-bold'>Variety of Cars</div>
          <div className='flex items-center justify-center'>At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
        <div className='p-7 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8'>
          <div className='flex items-center justify-center text-3xl font-bold'>Competitive Pricing</div>
          <div className='flex items-center justify-center' >At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
        <div className='p-7 rounded-xl w-1/4 border-white text-white border-2 flex flex-col gap-8'>
          <div className='flex items-center justify-center text-3xl font-bold'>24/7 support</div>
          <div className='flex items-center justify-center '>At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.</div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        
      <div className='relative h-[500px] w-1/2 text-white m-5 '>
      <div className='flex h-full w-full'>
        <div className='h-full w-full flex flex-col gap-5 justify-center'>
        <div className='text-3xl font-bold'>Discover a New Level of Comfort</div>
        <div>We're here to make the car-buying process as easy and stress-free as possible. Contact us today to schedule a test drive or to learn more about our financing and service options.</div>
        </div>
        <div className='h-full w-full'>
          <Image
          src=''
          alt=''
          height={500}
          width={500}
          />
        </div>
      </div>
      
      <BorderBeam/>
      </div>
      </div>
        </div>
    </main>
  )
}

export default Main