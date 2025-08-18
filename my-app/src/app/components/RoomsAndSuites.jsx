"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RoomsAndSuites() {
  const slides = [
    { leftImg: "/images/v-hotel-new1.jpg", rightImg: "/images/v-hotel-new2.jpg", title: "2 TWIN BEDS" },
    { leftImg: "/images/v-hotel-new3.jpg", rightImg: "/images/v-hotel-new4.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new5.jpg", rightImg: "/images/v-hotel-new7.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new7.jpg", rightImg: "/images/v-hotel-new1.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new2.jpg", rightImg: "/images/v-hotel-new3.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new4.jpg", rightImg: "/images/v-hotel-new5.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new7.jpg", rightImg: "/images/v-hotel-new1.jpg", title: "DELUXE KING ROOM" },
    { leftImg: "/images/v-hotel-new2.jpg", rightImg: "/images/v-hotel-new3.jpg", title: "DELUXE KING ROOM" },
  ];

  return (
    <section className="relative py-8 sm:py-12">
      {/* Background content box */}


<div
  className="relative 
             pt-10 sm:pt-16 
             px-4 sm:px-6 
             bg-[#ffffff] rounded-3xl shadow-2xl 
             w-[95%] sm:w-[90%] lg:w-[80%] 
             mr-auto z-10 
             min-h-[32rem] sm:min-h-[36rem] lg:min-h-[40rem]
             pb-[calc(18rem+40%)] sm:pb-16 lg:pb-[35rem]"
>
  {/* Main paper texture background */}
  <div
    className="absolute inset-0 rounded-3xl bg-cover bg-center"
    style={{
      backgroundImage: "url('/textures/paper-texture.png')",
    }}
  ></div>

  {/* Content wrapper */}
  <div className="relative z-10  max-w-5xl mx-auto text-black">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
      Rooms & Suites
    </h2>
    <p className="text-base sm:text-lg mb-6 max-w-2xl">
      Each guest room is thoughtfully designed and decorated with locally
      inspired details, and each contains one of 401 unique artworks inspired
      by Delhi.
    </p>

    {/* Tabs + Button row */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex space-x-6">
        <button className="border-b-2 border-red-500 pb-1">Rooms</button>
        <button className="pb-1">Suites</button>
      </div>
      <button className="border px-4 sm:px-6 py-2 uppercase transition-all duration-300 hover:bg-black hover:text-white w-full sm:w-auto">
        View All Rooms
      </button>
    </div>
  </div>
</div>


      {/* Slider Section - mobile me aur neeche khicha */}
    {/* Slider Section - desktop size fixed (1230×720) */}
{/* Slider Section - desktop size fixed (1294×723) */}
<div
  className="absolute left-1/2 -translate-x-1/2 
             top-[360px] sm:top-[340px] lg:top-[350px] 
             w-full max-w-[1294px] z-20 px-3 sm:px-6"
>
  <Swiper modules={[Navigation]} navigation slidesPerView={1} spaceBetween={20}>
    {slides.map((slide, i) => (
      <SwiperSlide key={i}>
        {/* Mobile: single image | Desktop: 2 columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 
                     h-[320px] sm:h-[400px] md:h-[500px] lg:h-[450px]"
        >
          {/* Left big image */}
          <img
            src={slide.leftImg}
            alt=""
            className="rounded-lg object-cover shadow-lg 
                       w-[95%] h-[120%]   // Mobile: width 5% कम, height 20% ज़्यादा
                       sm:w-full sm:h-full"
          />

          {/* Right small image */}
          <img
            src={slide.rightImg}
            alt=""
            className="hidden md:block rounded-lg object-cover shadow-lg 
                       w-[95%] h-[120%]   // Mobile: width 5% कम, height 20% ज़्यादा
                       sm:w-full sm:h-full"
          />
        </div>

        {/* Caption */}
        <div className="flex justify-between mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-medium px-2">
          <span>{slide.title}</span>
          <span>
            {i + 1} / {slides.length}
          </span>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </section>
  );
}
