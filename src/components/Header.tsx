import React from 'react'
import Image from 'next/image'
function Header() {
  return (
    <header className='h-24 w-full absolute  z-20'>
        <div className='w-full h-full flex justify-between dark:text-white bg-transparent text-white  items-center p-4 border-b-2 border-b-white'>
            <div className='logo '>
                <Image
                src='/logo/Untitled-2-Recovered.png'
                alt=''
                height={150}
                width={150}
                />
            </div>
            <div className=' flex gap-7 text-x'>
                <div className='cursor-pointer p-3'>Demos</div>
                <div className='cursor-pointer p-3'>About</div>
                <div className='cursor-pointer p-3'>Shop</div>
                <div className='cursor-pointer p-3'>All Pages</div>
            </div>
            <div className='flex gap-1 '>
                <div className='cursor-pointer p-3 '>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className='cursor-pointer p-3 border-2 border-white'>Explore Vehicles</div>
            </div>
        </div>
    </header>
  )
}

export default Header