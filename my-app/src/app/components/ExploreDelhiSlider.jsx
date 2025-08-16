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
    { category: "SHOPPING", name: "Emporio Mall", distance: "2.2 MI / 3.61 KM AWAY", color: "bg-red-400" },
    { category: "SHOPPING", name: "Aap ki Pasand Tea Gallery", distance: "9.5 MI / 15.36 KM AWAY", color: "bg-yellow-300" },
    { category: "CULTURE & DAY TRIPS", name: "Gurudwara Bangla Sahib", distance: "7.3 MI / 11.77 KM AWAY", color: "bg-teal-300" },
    { category: "SHOPPING", name: "Emporio Mall", distance: "2.2 MI / 3.61 KM AWAY", color: "bg-red-400" },
    { category: "SHOPPING", name: "Aap ki Pasand Tea Gallery", distance: "9.5 MI / 15.36 KM AWAY", color: "bg-yellow-300" },
    { category: "CULTURE & DAY TRIPS", name: "Gurudwara Bangla Sahib", distance: "7.3 MI / 11.77 KM AWAY", color: "bg-teal-300" },
  ];

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative py-12">
      {/* Backgrounds */}
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/delhi-bg.jpg')" }}
      />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-black/40" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-white">Explore Delhi</h2>
          <button className="bg-red-500 px-4 py-2 font-bold uppercase text-white">
            See All Attractions
          </button>
        </div>

        {/* Slider wrapper (relative) */}
        <div className="relative flex items-center">
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

          {/* Prev button */}
          <div
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 
                       flex items-center justify-center
                       w-10 h-10 rounded-full cursor-pointer 
                       bg-white text-black shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          {/* Next button */}
          <div
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 
                       flex items-center justify-center
                       w-10 h-10 rounded-full cursor-pointer 
                       bg-white text-black shadow-lg z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
