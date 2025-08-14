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
];

export default function DiningSlider() {
  return (
    <section className="relative bg-black text-white py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">DINING</h1>
        <button className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-black transition">
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
              {/* Mobile layout: stacked, Desktop: side by side */}
              <div className="relative flex flex-col md:flex-row md:justify-center items-center">
                {/* Prev Button */}
                <button className="prev-btn absolute top-1/2 left-2 md:left-4 z-20 transform -translate-y-1/2 text-lg md:text-2xl border border-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black">
                  ←
                </button>

                {/* Image */}
                <div className="w-full md:w-3/5">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1920}
                    height={900}
                    className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-none md:rounded-lg"
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    bg-white text-black p-6 rounded-lg shadow-lg
                    w-[85%] sm:w-[70%] md:w-[38%]
                    min-h-[250px] sm:min-h-[300px] md:min-h-[320px]
                    md:relative md:bottom-auto md:right-auto
                    -mt-[30%] md:mt-0 md:absolute md:bottom-6 md:right-6 z-10
                  "
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {slide.description}
                  </p>
                  <button className="text-xs sm:text-sm font-bold hover:underline">
                    DETAILS + RESERVATIONS →
                  </button>
                </div>

                {/* Next Button */}
                <button className="next-btn absolute top-1/2 right-2 md:right-4 z-20 transform -translate-y-1/2 text-lg md:text-2xl border border-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 hover:bg-white hover:text-black">
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
