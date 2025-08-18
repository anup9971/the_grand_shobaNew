"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    image: "/images/v-hotel-new7.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new1.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },
  {
    image: "/images/v-hotel-new5.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new3.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },
  {
    image: "/images/v-hotel-new4.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new2.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },

  {
    image: "/images/v-hotel-new7.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new1.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },
  {
    image: "/images/v-hotel-new5.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new3.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },
  {
    image: "/images/v-hotel-new4.jpg",
    title: "AnnaMaya",
    description:
      "Indulge in a distinctive dining experience only at AnnaMaya Foodhall. With delicious and sustainably cooked meals that will uplift your spirits...",
  },
  {
    image: "/images/v-hotel-new2.jpg",
    title: "The Hong Kong Club",
    description:
      "Experience luxury dining with a mix of Asian flavors in a vibrant setting...",
  },
];

export default function DiningSlider() {
  return (
    <section className="relative mt-[-210px] md:mt-[-80px] bg-[#f4f4f4] text-black  py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">DINING</h1>
        <button className="mt-4 px-6 py-2  border  hover:bg-black hover:text-white transition">
          DETAILS & RESERVATIONS
        </button>
      </div>

      {/* Slider */}
      <div className="relative px-0">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          loop={true}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative flex flex-col items-center">
                {/* Prev Button */}
                <button className="prev-btn absolute top-1/2 left-2 z-20 transform -translate-y-1/2 text-lg sm:text-2xl border border-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black">
                  ←
                </button>

                {/* Image */}
                <div className="w-full relative">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={900}
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
                  />
                  {/* Card overlapping image */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[30%] bg-white text-black p-6 rounded-lg shadow-lg w-[85%] sm:w-[60%] md:w-[40%] min-h-[200px] sm:min-h-[250px] md:min-h-[300px] z-10">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-xs sm:text-sm leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <button className="text-xs sm:text-sm font-bold hover:underline">
                      DETAILS + RESERVATIONS →
                    </button>
                  </div>
                </div>

                {/* Next Button */}
                <button className="next-btn absolute top-1/2 right-2 z-20 transform -translate-y-1/2 text-lg sm:text-2xl border border-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black">
                  →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
