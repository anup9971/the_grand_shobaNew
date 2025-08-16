"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function HeroSection() {
  let [readMore, setReadMore]=useState(false)
  let [secondreadMore, setSecondReadMore]=useState(false)
  return (
    <>
     <div className=' relative  w-full h-74'>
         <Image 
         src="/offers/offer1.jpg"
         
         fill
         className='object-cover'
         />
         <h2 className='relative capitazied font-bold text-4xl text-center top-34 text-white  font-serif '>EXCUSIVE OFFERS</h2>
     </div>

     {/* ----------------------------- offer card ------------------------------------------- */}
     <div className='grid items-start mt-10 md:grid-cols-2 bg-black gap-3 w-full p-2 md:p-5 '>
       
        <div className='col-span-1 rounded-t-lg bg-white '>
           <div className='w-full h-65 relative'>
             <Image
              src="/offers/offer1.jpg"
              fill 
              className='object-cover rounded-t-lg '
            
            />
            </div>  
            <div className='p-8' >
               <p className='text-2xl md:text-4xl text-gray-900'>18% Off on the 18th of Every Month</p>
               <p className='text-gray-800 font-light pt-4 text-justify'>Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal. This limited-time offer is available for one day only: simply book on the 18th using offer code SPECIAL18 to secure this rate on all room types. With
                {
                readMore && (
                  " stays completed within 30 days of booking, this monthly offer is crafted exclusively for you—seize the moment to elevate your next stay."
                )
              }
               </p>
              
              
              <button  onClick={()=>setReadMore(!readMore)}>
                   <span className='flex pt-4 font-light'>Read More{readMore? <FiChevronUp className='text-2xl ' />:<FiChevronDown className='text-2xl '/>} </span>
              </button>
                 <Link href="/" >
                <div className=' p-2 hover:text-white hover:bg-black  mt-8 border w-40'> SEE DETAILS</div>
              </Link>
            </div>        
        </div>
         <div className='col-span-1 rounded-t-lg bg-white'>
           <div className='w-full h-65 relative'>
             <Image
              src="/offers/offer2.jpg"
              fill 
              className='object-cover rounded-t-lg '
            
            />
            </div>  
            <div className='p-8' >
               <p className='text-2xl md:text-4xl text-gray-900'>Executive Offer</p>
               <p className='text-gray-800 font-light pt-4 text-justify'>Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handpicked comforts, enjoy an elevated experience at Andaz Delhi—perfectly crafted for both business and relaxation.on the 18th using offer code SPECIAL18 to secure this rate on all room types. Withon the 18th using offer code SPECIAL18 to secure this rate on all room types. With
               </p>
               {
                 secondreadMore && (
                  <ul>
                    <li className='flex gap-2 pt-4'><VscDebugBreakpointLog />Buffet breakfast at Annamaya</li>
                    <li className='flex gap-2 pt-4'> <VscDebugBreakpointLog />Daily two pieces of laundry or ironing (non-cumulative)</li>
                    <li className='flex gap-2 pt-4'> <VscDebugBreakpointLog />High-speed WiFi for uninterrupted connectivity</li>
                    <li className='flex gap-2 pt-4'> <VscDebugBreakpointLog />Round-trip airport transfers for a hassle-free journey</li>
                    <li className='flex gap-2 pt-4'> <VscDebugBreakpointLog />1+1 offer on Beer and IMFL during Happy Hour (6 PM – 8 PM) at Juniper.</li>
                  </ul>
                )
              }
              
              
              <button  onClick={()=>setSecondReadMore(!secondreadMore)}>
                   <span className='flex pt-4 font-light'>Read More{secondreadMore? <FiChevronUp className='text-2xl ' />:<FiChevronDown className='text-2xl '/>} </span>
              </button>

              <Link href="/" >
                <div className='p-2 mt-8 border hover:text-white hover:bg-black w-40'> SEE DETAILS</div>
              </Link>
               
            </div>
        </div>

     </div>

    </>
  )
}
