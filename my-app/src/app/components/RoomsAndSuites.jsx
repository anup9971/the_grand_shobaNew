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
    <section className="relative py-12">
      {/* Background with image covering 80% width */}
      <div
        className="absolute top-0 left-0 w-[80%] h-full rounded-r-2xl"
        style={{
          zIndex: 0,
          backgroundImage: 'url("/images/v-hotel-new2.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px", // background को लंबा करने के लिए
        }}
      ></div>

      {/* Slider Section */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <Swiper modules={[Navigation]} navigation slidesPerView={1} spaceBetween={20}>
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={slide.leftImg}
                  alt=""
                  className="rounded-lg h-[380px] w-full object-cover" // image height कम
                />
                <img
                  src={slide.rightImg}
                  alt=""
                  className="rounded-lg h-[380px] w-full object-cover" // image height कम
                />
              </div>
              <div className="flex justify-between mt-4 text-lg font-medium px-2">
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
