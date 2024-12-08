// 

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/Logo.png"
import Searchicon from "../../public/Search comment.png"
import Wishlist from "../../public/Wishlist.png"
import Horizontal from "../../public/Auto Layout Horizontal.png"
import Menlogo from "../../public/Man pic.png"

const Navbar = () => {
  return (
    <header>
  
      <div className="bg-primaryColor flex justify-between items-center px-4 sm:px-6 py-2 text-[8px] sm:text-[9px] md:text-[11px] font-medium text-gray-600 bg-neutral-100">
        <Image src="/Man pic.png" alt={''} width={24} height={24} className='ml-2 md:ml-8' />
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          <Link href="/findstore" className="hover:text-gray-800">Find Link Store</Link>
          <Link href="/help" className="hover:text-gray-800">Help</Link>
          <Link href="/joinus" className="hover:text-gray-800">Join Us</Link>
          <Link href="/login_page" className="hover:text-gray-800">Sign In</Link>
        </div>
      </div>

 
      <div className='flex flex-wrap justify-between items-center p-3 md:p-4 lg:p-6 font-sans'>
    
        <a href='#' className='text-2xl font-bold drop-shadow-lg ml-4 sm:ml-8'>
          <img
            src="/Logo.png" 
            alt="Nike Logo"
            className="h-10 md:h-14"
          />
        </a>

     
        <div className='hidden md:flex gap-4 lg:gap-8'>
          <ul className='flex gap-6 lg:gap-10 font-medium text-sm lg:text-base'>
            <li><Link href="/">New & Featured</Link></li>
            <li><Link href="/allproducts">Men</Link></li>
            <li><Link href="/allproducts">Women</Link></li>
            <li><Link href="/allproducts">Kids</Link></li>
            <li><Link href="/sale">Sale</Link></li>
            <li><Link href="/allproducts">SNKRS</Link></li>
          </ul>
        </div>

     
        <div className='flex items-center gap-2 sm:gap-3 px-4 sm:px-6'>
          <ul className='flex gap-2 sm:gap-3 md:gap-4'>
            <li>
              <Image src="/Search comment.png" alt='icons' width={180} height={40} className='w-32 '/>
            </li>
            <li>
              <Link href="/allproducts">
                <Image src="/Wishlist.png" alt='icons' width={36} height={36} className='w-5 sm:w-6 md:w-8' />
              </Link>
            </li>
            <li>
              <Link href="/allproducts">
                <Image src="/Auto Layout Horizontal.png" alt='icons' width={36} height={36} className='w-6 sm:w-7 md:w-8' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
