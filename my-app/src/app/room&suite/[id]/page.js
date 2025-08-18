"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  FaWifi,
  FaCar,
  FaUtensils,
  FaConciergeBell,
  FaSpa,
  FaDog,
  FaBusinessTime,
  FaUsers,
  FaCalendarCheck,
  FaShoppingBag,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "next/navigation";
import { rooms } from "@/roomData";

import RelatedRooms from "@/app/components/relatedRooms/RelatedRooms";
import Reviews from "@/app/components/relatedRooms/Reviews";
import PromoSection from "@/app/components/relatedRooms/PromoSection";
import BrandSection from "@/app/components/room&suite/BrandSection";




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


export default function Page({params}) {
 
  let {id} = useParams()
  
  
  let  room = rooms?.find((x)=>x.id === Number(id))
  
  //  related room
 
   

  const amenities = [
    { icon: <FaWifi className="w-5 h-5" />, label: "Free Internet Access" },
    { icon: <FaCar className="w-5 h-5" />, label: "Free Parking" },
    { icon: <FaUtensils className="w-5 h-5" />, label: "On-Site Restaurant" },
    { icon: <FaConciergeBell className="w-5 h-5" />, label: "Room Service" },
    { icon: <FaDog className="w-5 h-5" />, label: "Pet Friendly" },
    { icon: <FaBusinessTime className="w-5 h-5" />, label: "Business Services" },
    { icon: <FaCalendarCheck className="w-5 h-5" />, label: "Meeting Facilities" },
    { icon: <FaSpa className="w-5 h-5" />, label: "Spa" },
    { icon: <FaUsers className="w-5 h-5" />, label: "Concierge" },
    { icon: <FaShoppingBag className="w-5 h-5" />, label: "Shopping" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
     autoplay: false,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };




  return (
  <>
    <div className="max-w-7xl bg-white text-black mx-auto p-4">
     
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Slider */}
        <div className="relative">
          <Slider {...settings}>
            {room?.image?.map((src, i) => (
              <div key={i} className="relative w-full h-72 sm:h-96">
                <Image
                  src={src}
                  alt={`Hotel image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">The Grand Shoba {room.view}</h1>
          <p className="text-sm text-gray-600">The Grand Shoba. {room.type}</p>
          <div className="flex items-center mt-2 space-x-1 text-yellow-500">
            {"★★★★★"} <span className="text-gray-800 ml-2">4.5/5</span>
            <a
              href="#"
              className="text-blue-600 underline text-sm ml-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website ↗
            </a>
          </div>
          <p className="text-sm mt-2 text-gray-700">
            📍 1031, Gate no. 2,  Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi, delhi, Delhi 110037
          </p>
          <p className="text-xs mt-2 text-gray-500">
           {room.description}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Description</h2>
        <p className="text-gray-700 mt-2">
          Located just a 7-minute drive from IGI Airport, the grand shoba Delhi, by the grand shoba
          offers seamless connectivity with direct access to key hubs across
          Gurgaon, Dwarka, and Yashobhoomi via the newly opened Dwarka Expressway
          tunnel...
        </p>
      </div>

      {/* Amenities */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {amenities.map((a, i) => (
          <div key={i} className="flex items-center space-x-2">
            {a.icon}
            <span className="text-sm">{a.label}</span>
          </div>
        ))}
      </div>
    </div>


{/* -------------------------------------  Related room section -------------------------------------- */}

   <RelatedRooms  id ={id}  />



   {/* ------------------------------------ Reviews resction ----------------------------------------------------- */}
    
    <Reviews/>


    {/* -----------------------------------  Promo section ----------------------------------------------------    */}
     
     <PromoSection/>



      {/* ----------------------------------------- Brand Section --------------------------------------------------- */}

      <BrandSection/>
  </>


  );
}
