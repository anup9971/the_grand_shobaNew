import React from 'react'
import { MdLocationPin, MdOutlinePhoneInTalk } from 'react-icons/md'
import AboutSection from '../components/room&suite/AboutSection'
import BrandSection from '../components/room&suite/BrandSection'

export default function page() {
  return (
    <>
    <div className='bg-black p-3 md:p-16 text-white'>
      <h2 className='text-center text-5xl  md:text-6xl font-serif'>Hotel Info</h2>
          <div className="md:flex md:gap-8 pt-15 justify-center ">
              <div className="flex pb-5 md:pb-0 gap-2 hover:underline">
                <MdLocationPin className="md:text-2xl text-4xl" />
                <a
                  href="https://www.google.com/maps/place/V+Hotel+The+Grand+Shoba+(Delhi+Airport)/@28.5513409,77.1309002,17z/data=!4m9!3m8!1s0x390d1d86b229e7bf:0x5a55a0c4e18ced29!5m2!4m1!1i2!8m2!3d28.5513362!4d77.1334751!16s%2Fg%2F11cr_xfxt4?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 1031, Gate no. 2,  Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi, delhi, Delhi 110037
                </a>
              </div>
              <span className='md:flex hidden'> |</span>
              <hr  className='pb-5'/>
               <div className="flex gap-2 hover:underline">
                 <MdOutlinePhoneInTalk className="text-2xl" />
                 <a href="tel:+919874563210">+91 9874563210</a>
               </div>
          </div>

        <div className='pt-14 '>
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=v hotel the grand shoba , 1031, Gate no. 2,  Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi, delhi, Delhi 110037&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              height="400"
              style={{ border: 0 ,width:"100%"}}
              allowFullScreen=""
              loading="lazy"
              className='rounded-t-md'
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className='p-5 md:p-10  rounded-b-lg' style={{backgroundImage:"url(/room&suite/roombg.png)"}}>
              <p className=' font-serif font-light text-2xl md:text-5xl text-black'>Parking & Transportation</p>
              <hr className='mt-4 text-black' />
              <div className='md:p-10 p-4'> 
                <p className='text-black font-bold text-xl  md:text-2xl font-serif'>Parking</p>
                <div className='text-gray-700 flex mt-2 font-medium p-1 justify-between md:w-150'>
                  <span >Valet Parking</span>
                  <span>Free</span>
                </div>
                <div className='text-gray-700 flex mt-[-1px] font-medium p-1  justify-between md:w-150'>
                  <span >Self-Parking</span>
                  <span>Free</span>
                </div>

                <p className='text-black font-bold text-xl  pt-8 md:text-2xl font-serif'>Parking</p>
                <div className='text-gray-700 flex mt-2 font-medium p-1 justify-between md:w-150'>
                  <span >Indira Gandhi International Airport (DEL)</span>
                  <span>3.2 Kilometers</span>
                </div>
              </div>
             
            </div>
        </div>

    </div>

    <AboutSection/>
    <BrandSection/>
    </>
  )
}
