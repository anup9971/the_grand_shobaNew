"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowRoundBack, IoIosArrowUp } from "react-icons/io";
import toast from 'react-hot-toast';
import { useParams } from 'next/navigation';
import AboutSection from '@/app/components/room&suite/AboutSection';
import BrandSection from '@/app/components/room&suite/BrandSection';


export default function Page({params}) {
  let {id }= useParams()
    let [condition,setCondition]= useState(false)
    const [copied, setCopied] = useState(false);

    const textToCopy = "SPECIAL18";
 const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Modern browser (HTTPS ya localhost)
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback: create textarea for insecure HTTP
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-99999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopied(true);
       toast.success("Code Copied!")
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <>
     <div className='grid md:grid-cols-2  pb-22 h-auto' style={{backgroundImage:"url(/room&suite/roombg.png)", backgroundSize:"cover" , backgroundRepeat:"no-repeat"}}>
      <div className='col-span-1 pt-12 w-full md:p-16 p-2 '>
         <div className='relative  w-full  h-130 md:h-154 rounded-2xl '>
         <Image 
          src="/offers/offer2.jpg"
          fill
          alt='offers image'
          priority
          className='object-cover   w-full rounded-2xl'
        />
         </div>
 
      </div>    
       <div className='col-span-1'>
            <Link href="/offers" >
             <p className='flex  hover:text-orange-600 mt-[-90px] md:mt-0 pl-4 pt-28 md:pl-0 text-black md:pt-15 font-bold underline'> <IoIosArrowRoundBack   className='text-2xl font-bold' /> BACK TO OFFERS</p>
            </Link>
            
             <div className='p-5'>
                <h2 className='text-2xl md:text-4xl text-black'>18% Off on the 18th of Every Month</h2>
                 <p className='text-gray-600 pt-4 font-light'>Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of the grand shoba members to save 18% on stays at participating the grand shoba hotels across India and Nepal. This limited-time offer is available for one day only: simply book on the 18th using offer code SPECIAL18 to secure this rate on all room types. With stays completed within 30 days of booking, this monthly offer is crafted exclusively for you—seize the moment to elevate your next stay.</p>
                <p className='text-gray-600 pt-4 font-light'>Not a World of the grand shoba member? Sign up now. Membership is free.</p>
                <p className='pt-4 text-sm text-gray-800'> <span className='text-gray-900 font-bold '>Valid for Stays:</span> August 13, 2025 - Aug 13, 2025 </p>
                <p className='pt-3 text-sm text-gray-800'> <span className='text-gray-900  font-bold '>Book By:</span> Aug 19, 2040 </p>
                
                <div className='bg-[#ffffffb2] md:flex h-[100px]  md:p-6 rounded-2xl text-center  gap-3 mt-10 '>
                   <div className='font-bold md:text-2xl pt-3 text-gray-900  font-serif'>OFFERS CODE: SPECIAL18</div> 
                    <button
                       onClick={handleCopy}
                       className="px-4 py-2  hover:cursor-pointer mt-2 md:float-end bg-gray-600  text-white rounded hover:bg-gray-700"
                     >
                     COPY OFFER CODE  
                     </button>
                </div>
              
              {/*  term & condition  */}
                <div className='pt-10'>
                    <hr className='text-black mt-5 mb-3'/>
                    
                       <div onClick={()=> setCondition(!condition)} className='text-gray-950 hover:text-orange-700 hover:cursor-pointer  text-2xl'>
                            <span className='font-semibold font-serif '>TERMS & CONDITIONS</span> 
                             <span className='float-end pr-5'>
                                {condition ?<IoIosArrowUp />:<IoIosArrowDown />}
                             </span>
                       </div>
                       <div>
                         {
                            condition &&(
                                <>
                                <p className='text-gray-700 font-light pt-5 bg-[#ffffff6b]  p-2 md:p-4 rounded-xl'>Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of the grand shoba members to save 18% on stays at participating the grand shoba hotels across India and Nepal. This limited-time offer is available for one day only: simply book on the 18th using offer code SPECIAL18 to secure this rate on all room types. With stays completed within 30 days of booking, this monthly offer is crafted exclusively for you—seize the moment to elevate your next stay.</p>
                                <p className='text-gray-700 font-light pt-5 mt-3 bg-[#ffffff6b]  p-2 md:p-4 rounded-xl'>Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of the grand shoba members to save 18% on stays at participating the grand shoba hotels across India and Nepal. This limited-time offer is available for one day only: simply book on the 18th using offer code SPECIAL18 to secure this rate on all room types. With stays completed within 30 days of booking, this monthly offer is crafted exclusively for you—seize the moment to elevate your next stay.</p>
                                <p className='text-gray-700 font-light pt-5 mt-3 bg-[#ffffff6b]  p-2 md:p-4 rounded-xl'>Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of the grand shoba members to save 18% on stays at participating the grand shoba hotels across India and Nepal. This limited-time offer is available for one day only: simply book on the 18th using offer code SPECIAL18 to secure this rate on all room types. With stays completed within 30 days of booking, this monthly offer is crafted exclusively for you—seize the moment to elevate your next stay.</p>
                                </>
                            )
                         }
                       </div>
                    <hr className='text-black mt-3'/>
                </div>
              <Link href={`/check-availability/${id}`}>
                    <button className='text-xl hover:bg-white bg-black border hover:text-black p-2 mt-5 hover:cursor-pointer text-white'> BOOK NOW </button>
                 </Link>
            </div>
 {/* book now */}
                 
      </div> 
     </div>
     <AboutSection/>
     <BrandSection/>
    </>
  )
}
