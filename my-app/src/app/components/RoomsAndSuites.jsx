"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RoomsAndSuites() {
  const slides = [
    {
      leftImg: "/images/room1-left.jpg",
      rightImg: "/images/room1-right.jpg",
      title: "2 TWIN BEDS",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
    {
      leftImg: "/images/room2-left.jpg",
      rightImg: "/images/room2-right.jpg",
      title: "DELUXE KING ROOM",
    },
  ];

  return (
    <section className="bg-[#f9f8f4] py-12">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={20}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 gap-2">
                <img src={slide.leftImg} alt="" className="rounded-lg" />
                <img src={slide.rightImg} alt="" className="rounded-lg" />
              </div>
              <div className="flex justify-between mt-2">
                <span>{slide.title}</span>
                <span>{i + 1} / {slides.length}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
