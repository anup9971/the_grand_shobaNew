"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const hotelData = [
  {
    title: "Spa",
    image: "/images/v-hotel-new7.jpg",
    description:
      "Discover a calming sanctuary amidst the hustle and bustle of Delhi. Andaz Spa offers an innovative apothecary approach guided by your chakra energies and desires.",
    details: ["Hours: 09:00am - 09:00pm.", "For more details, contact +91 11 4903 1347"],
  },
  {
    title: "401 Tours",
    image: "/images/v-hotel-new1.jpg",
    description: "Experience vibrant city tours full of culture, history, and adventure.",
    details: ["Daily availability", "Contact front desk for booking"],
  },
  {
    title: "Pool",
    image: "/images/v-hotel-new2.jpg",
    description: "Relax by our luxurious pool with premium facilities.",
    details: ["Open: 7am - 8pm", "Towels and refreshments available"],
  },
  {
    title: "Fitness Centre",
    image: "/images/v-hotel-new3.jpg",
    description: "Stay fit with state-of-the-art gym equipment.",
    details: ["Open 24/7", "Personal trainers available on request"],
  },
  {
    title: "Spa",
    image: "/images/v-hotel-new7.jpg",
    description:
      "Discover a calming sanctuary amidst the hustle and bustle of Delhi. Andaz Spa offers an innovative apothecary approach guided by your chakra energies and desires.",
    details: ["Hours: 09:00am - 09:00pm.", "For more details, contact +91 11 4903 1347"],
  },
  {
    title: "401 Tours",
    image: "/images/v-hotel-new1.jpg",
    description: "Experience vibrant city tours full of culture, history, and adventure.",
    details: ["Daily availability", "Contact front desk for booking"],
  },
  {
    title: "Pool",
    image: "/images/v-hotel-new2.jpg",
    description: "Relax by our luxurious pool with premium facilities.",
    details: ["Open: 7am - 8pm", "Towels and refreshments available"],
  },
  {
    title: "Fitness Centre",
    image: "/images/v-hotel-new3.jpg",
    description: "Stay fit with state-of-the-art gym equipment.",
    details: ["Open 24/7", "Personal trainers available on request"],
  },
];

export default function HotelSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const VISIBLE = 3;
  const GAP_PX = 24;
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const calc = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.clientWidth;
      const width = (vw - GAP_PX * (VISIBLE - 1)) / VISIBLE;
      setCardWidth(Math.max(260, Math.floor(width)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = useMemo(
    () => Math.max(0, hotelData.length - VISIBLE),
    []
  );

  const nextSlide = () => {
    setCurrentIndex((i) => (i < maxIndex ? i + 1 : i));
  };
  const prevSlide = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : i));
  };

  const offsetPx = currentIndex * (cardWidth + GAP_PX);

  return (
    <div className="bg-black text-white py-10 relative">
      <h2 className="text-4xl md:text-5xl font-serif mb-8 px-6">Explore Our Hotel</h2>

      <div className="flex items-center px-4 md:px-6">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-transparent text-white border border-white/60 hover:bg-white hover:text-black transition z-10 disabled:opacity-40"
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Viewport */}
        <div ref={viewportRef} className="overflow-hidden w-full mx-3">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${GAP_PX}px`,
              transform: `translateX(-${offsetPx}px)`,
              width: cardWidth
                ? hotelData.length * cardWidth + GAP_PX * (hotelData.length - 1)
                : "auto",
            }}
          >
            {hotelData.map((hotel, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 bg-white text-black rounded-2xl overflow-hidden shadow"
                style={{ width: cardWidth ? `${cardWidth}px` : "33.333%" }}
              >
                {/* Bigger Image */}
                <div className="relative h-64 md:h-72 w-full">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 33vw"
                  />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col h-44">
                  <h3 className="text-xl font-semibold mb-2">{hotel.title}</h3>
                  <div className="mt-auto flex justify-end">
                    <button
                      onClick={() => setSelectedHotel(hotel)}
                      className="flex items-center text-sm font-semibold text-orange-600 hover:underline"
                    >
                      See Details
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-transparent text-white border border-white/60 hover:bg-white hover:text-black transition z-10 disabled:opacity-40"
          disabled={currentIndex === maxIndex}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modal */}
      {selectedHotel && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl overflow-hidden max-w-5xl w-[95%] grid grid-cols-1 md:grid-cols-2">
            <div className="relative w-full h-80 md:h-[26rem]">
              <Image
                src={selectedHotel.image}
                alt={selectedHotel.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 relative">
              <button
                onClick={() => setSelectedHotel(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-semibold mb-4">{selectedHotel.title}</h3>
              <p className="mb-4 text-gray-700">{selectedHotel.description}</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                {selectedHotel.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <button className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
