"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";

export default function ExploreDelhiSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const places = [
    {
      category: "SHOPPING",
      name: "Emporio Mall",
      distance: "2.2 MI / 3.61 KM AWAY",
      color: "bg-red-400",
    },
    {
      category: "SHOPPING",
      name: "Aap ki Pasand Tea Gallery",
      distance: "9.5 MI / 15.36 KM AWAY",
      color: "bg-yellow-300",
    },
    {
      category: "CULTURE & DAY TRIPS",
      name: "Gurudwara Bangla Sahib",
      distance: "7.3 MI / 11.77 KM AWAY",
      color: "bg-teal-300",
    },

      {
      category: "SHOPPING",
      name: "Emporio Mall",
      distance: "2.2 MI / 3.61 KM AWAY",
      color: "bg-red-400",
    },
    {
      category: "SHOPPING",
      name: "Aap ki Pasand Tea Gallery",
      distance: "9.5 MI / 15.36 KM AWAY",
      color: "bg-yellow-300",
    },
    {
      category: "CULTURE & DAY TRIPS",
      name: "Gurudwara Bangla Sahib",
      distance: "7.3 MI / 11.77 KM AWAY",
      color: "bg-teal-300",
    },

      {
      category: "SHOPPING",
      name: "Emporio Mall",
      distance: "2.2 MI / 3.61 KM AWAY",
      color: "bg-red-400",
    },
    {
      category: "SHOPPING",
      name: "Aap ki Pasand Tea Gallery",
      distance: "9.5 MI / 15.36 KM AWAY",
      color: "bg-yellow-300",
    },
    {
      category: "CULTURE & DAY TRIPS",
      name: "Gurudwara Bangla Sahib",
      distance: "7.3 MI / 11.77 KM AWAY",
      color: "bg-teal-300",
    },

      {
      category: "SHOPPING",
      name: "Emporio Mall",
      distance: "2.2 MI / 3.61 KM AWAY",
      color: "bg-red-400",
    },
    {
      category: "SHOPPING",
      name: "Aap ki Pasand Tea Gallery",
      distance: "9.5 MI / 15.36 KM AWAY",
      color: "bg-yellow-300",
    },
    {
      category: "CULTURE & DAY TRIPS",
      name: "Gurudwara Bangla Sahib",
      distance: "7.3 MI / 11.77 KM AWAY",
      color: "bg-teal-300",
    },

      {
      category: "SHOPPING",
      name: "Emporio Mall",
      distance: "2.2 MI / 3.61 KM AWAY",
      color: "bg-red-400",
    },
    {
      category: "SHOPPING",
      name: "Aap ki Pasand Tea Gallery",
      distance: "9.5 MI / 15.36 KM AWAY",
      color: "bg-yellow-300",
    },
    {
      category: "CULTURE & DAY TRIPS",
      name: "Gurudwara Bangla Sahib",
      distance: "7.3 MI / 11.77 KM AWAY",
      color: "bg-teal-300",
    },
  ];

  useEffect(() => {
    setSwiperReady(true); // Delay swiper render until refs are ready
  }, []);

  return (
    <div className="relative py-12">
      {/* Top half background image */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/delhi-bg.jpg')", // replace with your image
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black/40"></div>

      {/* Bottom half black background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black"></div>

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-white">Explore Delhi</h2>
          <button className="bg-red-500 px-4 py-2 font-bold uppercase text-white">
            See All Attractions
          </button>
        </div>

        {/* Slider */}
        {swiperReady && (
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${place.color} p-6 rounded-lg h-48 flex flex-col justify-between`}
                >
                  <div>
                    <p className="text-sm font-bold">{place.category}</p>
                    <h3 className="text-2xl mt-2">{place.name}</h3>
                  </div>
                  <p className="text-sm">{place.distance}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* White arrow buttons */}
        <div
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white text-black shadow-lg"
        >
          ‹
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full cursor-pointer bg-white text-black shadow-lg"
        >
          ›
        </div>
      </div>
    </div>
  );
}