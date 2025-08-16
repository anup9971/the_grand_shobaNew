"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiPhone, FiMapPin, FiChevronUp, FiChevronDown } from "react-icons/fi";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
export default function DiningSlider({name, img}) {
const [openHours, setOpenHours] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);

    // let[images, setImages]=useState(
    //     ["/room&suite/room1.jpg","/room&suite/room3.jpg","/room&suite/room4.jpg","/room&suite/room2.jpg"]
    // )
    const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8592;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8594;
  </button>
);

      const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>
        <div className="grid grid-cols-1 pt-8  bg-black gap-6">
                <div className=' p-2 md:p-8'>
                    <Slider {...sliderSettings}>
                          {img.map((img, index) => (
                            <div key={`-${index}`} className="relative w-full h-56 md:h-90 lg:h-110">
                              <Image
                                src={img}
                                alt={` image ${index + 1}`}
                                fill
                                className="object-cover  rounded-t-lg"
                              />
                            </div>
                          ))}
                        </Slider>

                        <div className='bg-white mt-[-7px] rounded-b-lg md:p-12 p-3'>
                            <h2 className='text-4xl text-black pb-5 font-bold font-serif'>{name}</h2>
                            <p className='text-gray-700 font-light'>Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With
                                 delicious and sustainably cooked meals that will uplift your spirits, we will take the whole experience to another 
                                 level. This is a modern food hall that is inspired by the colours and flavours of the world where food is served 
                                 and interesting artisanal produce is available for sale. The menu is designed around consciously sourced ingredients
                                  from local artisans who directly or indirectly contribute towards the well-being of society. The essence of
                                   AnnaMaya at The Grand shoba Delhi is synonymous with sustainability and mindful eating. We encourage our guests every day
                                    to adopt a more sustainable and conscious lifestyle by eating local and shopping artisanal. “Eat Mindful. Shop 
                                    Artisanal and Raise Awareness” is the motto of this food hall in Aerocity. Drop-in for an indulgent journey. Why 
                                    not enjoy rewards every time you dine out? As a Grand Shoba DINING CLUB subscriber, get exclusive benefits every time
                                     you eat at over 100 of our award-winning restaurants, without any minimum spend requirements.</p>
                       
                       
                            {/* Restoraunt information */}  
                              <div className='pt-8 pb-10'>
                                <h3 className="font-semibold text-gray-800 text-lg">Dress Code</h3>
                                <p className="text-gray-700">Casual</p>
                              </div>
                             {/* Hours */}
                             <div className="border-t pt-4">
                                <button
                                 onClick={() => setOpenHours(!openHours)}
                                 className="w-full flex justify-between items-center text-lg font-semibold"
                               >
                                 <span className='text-gray-800'>Hours</span>
                                 {openHours ? <FiChevronUp className='text-gray-800' /> : <FiChevronDown  className='text-gray-800'/>}
                               </button>
                               {openHours && (
                                 <div className="mt-2 text-gray-700 flex justify-between">
                                   <span>Monday - Sunday</span>
                                   <span>6:30 AM - 12:00 AM</span>
                                 </div>
                               )}
                             </div>
                            
                            {/* Menus */}
                            <div className="border-t pt-4">
                              <button
                                onClick={() => setOpenMenus(!openMenus)}
                                className="w-full flex justify-between items-center text-lg font-semibold"
                              >
                                <span className='text-gray-800'>Menus</span>
                                {openMenus ? <FiChevronUp className='text-gray-800' /> : <FiChevronDown  className='text-gray-800'/>}
                              </button>
                              {openMenus && (
                                <div className="mt-2  text-gray-700">
                                  <Link href="/menu">
                                  <p className='flex gap-3 hover:text-orange-700 ' >Menu <FaExternalLinkAlt className='text-xl'/></p>
                                  </Link>
                                </div>
                              )}
                            </div>
                    
                             {/* Contact */}
                            <div className="border-t pt-4 space-y-4">
                              <h3 className="font-semibold text-gray-800 text-lg">Contact</h3>
                              <div className="flex items-center gap-2 text-gray-700">
                                <FiPhone className="text-orange-500 text-xl" />
                                <span>+91 8588804222</span>
                              </div>
                              <div className="flex items-start gap-2 text-gray-700">
                                <FiMapPin className="text-orange-500 text-xl mt-1" />
                                <span>
                                  Asset No. 1, Aerocity, New Delhi - 110037, Delhi, India
                                </span>
                              </div>
                            </div>
                        </div>



                </div>
            </div>
    
    </>
  )
}
