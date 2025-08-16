"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BrandSection from "./room&suite/BrandSection";

const offers = [
  {
    title: "18% OFF ON THE 18TH OF EVERY MONTH",
    description:
      "Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal...",
    img: "/images/v-hotel-new1.jpg",
  },
  {
    title: "MEMBER RATE",
    description:
      "There’s more to earn—and enjoy—when you book smart, only on hyatt.com. Members can save more. Book a standard or premium room at participating hotels...",
    img: "/images/v-hotel-new2.jpg",
  },
  {
    title: "EXECUTIVE OFFER",
    description:
      "Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handcrafted comforts, enjoy an elevated experience...",
    img: "/images/v-hotel-new3.jpg",
  },
    {
    title: "18% OFF ON THE 18TH OF EVERY MONTH",
    description:
      "Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal...",
    img: "/images/v-hotel-new1.jpg",
  },
  {
    title: "MEMBER RATE",
    description:
      "There’s more to earn—and enjoy—when you book smart, only on hyatt.com. Members can save more. Book a standard or premium room at participating hotels...",
    img: "/images/v-hotel-new2.jpg",
  },
  {
    title: "EXECUTIVE OFFER",
    description:
      "Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handcrafted comforts, enjoy an elevated experience...",
    img: "/images/v-hotel-new3.jpg",
  },
    {
    title: "18% OFF ON THE 18TH OF EVERY MONTH",
    description:
      "Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal...",
    img: "/images/v-hotel-new1.jpg",
  },
  {
    title: "MEMBER RATE",
    description:
      "There’s more to earn—and enjoy—when you book smart, only on hyatt.com. Members can save more. Book a standard or premium room at participating hotels...",
    img: "/images/v-hotel-new2.jpg",
  },
  {
    title: "EXECUTIVE OFFER",
    description:
      "Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handcrafted comforts, enjoy an elevated experience...",
    img: "/images/v-hotel-new3.jpg",
  },
    {
    title: "18% OFF ON THE 18TH OF EVERY MONTH",
    description:
      "Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal...",
    img: "/images/v-hotel-new1.jpg",
  },
  {
    title: "MEMBER RATE",
    description:
      "There’s more to earn—and enjoy—when you book smart, only on hyatt.com. Members can save more. Book a standard or premium room at participating hotels...",
    img: "/images/v-hotel-new2.jpg",
  },
  {
    title: "EXECUTIVE OFFER",
    description:
      "Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handcrafted comforts, enjoy an elevated experience...",
    img: "/images/v-hotel-new3.jpg",
  },
    {
    title: "18% OFF ON THE 18TH OF EVERY MONTH",
    description:
      "Mark your calendar—every 18th is Members’ Day, an exclusive opportunity for World of Hyatt members to save 18% on stays at participating Hyatt hotels across India and Nepal...",
    img: "/images/v-hotel-new1.jpg",
  },
  {
    title: "MEMBER RATE",
    description:
      "There’s more to earn—and enjoy—when you book smart, only on hyatt.com. Members can save more. Book a standard or premium room at participating hotels...",
    img: "/images/v-hotel-new2.jpg",
  },
  {
    title: "EXECUTIVE OFFER",
    description:
      "Make your next stay truly memorable with exclusive privileges. From seamless arrivals to handcrafted comforts, enjoy an elevated experience...",
    img: "/images/v-hotel-new3.jpg",
  },
];


export default function OffersSection() {
  const sliderRef = useRef(null);

  const smoothScroll = (element, target, duration) => {
    const start = element.scrollLeft;
    const change = target - start;
    let startTime = null;
    const ease = (t) => t * (2 - t);

    const animateScroll = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      element.scrollLeft = start + change * ease(progress);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const scroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const cardWidth = el.querySelector("[data-card]")?.offsetWidth || 320;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    const target =
      direction === "left"
        ? el.scrollLeft - scrollAmount
        : el.scrollLeft + scrollAmount;

    smoothScroll(el, target, 500);
  };

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Title */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-4xl font-serif">OFFERS</h2>
          <button className="border border-white px-6 py-2 text-sm font-semibold tracking-wide hover:bg-white hover:text-black transition">
            VIEW ALL OFFERS
          </button>
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar px-12"
        >
          {offers.map((offer, index) => (
            <div
              key={index}
              data-card
              className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={offer.img}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-60">
                <h3 className="font-semibold text-lg mb-3">{offer.title}</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-4">
                  {offer.description}
                </p>
                <button className="border border-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white transition self-start">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Bunkhouse Hotels */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="border rounded-lg flex flex-col md:flex-row items-center bg-[#1a1a1a] p-6 md:p-10 gap-6">
          {/* Left Text */}
          <div className="flex-1 text-white">
            <h3 className="text-lg font-bold mb-3 uppercase">
              BUNKHOUSE HOTELS HAVE JOINED WORLD OF HYATT
            </h3>
            <p className="text-sm mb-4">
              Be more rewarded at participating Bunkhouse Hotels with World of
              Hyatt benefits. Earn and redeem points and enjoy other rewards as
              you experience unique culture, design and personality at inviting
              escapes in Texas and Mexico.
            </p>
            <button className="text-sm font-semibold flex items-center gap-2">
              LEARN MORE →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 w-full md:w-72 h-48 relative">
            <Image
              src="/images/bunkhouse.jpg"
              alt="Bunkhouse Hotels"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Weddings & Meetings Section */}
<div className="max-w-7xl mx-auto px-4 mt-20 text-center">
<h2 className="text-4xl font-serif mb-10 text-white">Weddings & Meetings</h2>

  <div className="flex flex-wrap justify-center gap-8">
    {/* Card 1 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-72">
      <div className="relative w-full h-48">
        <Image
          src="/images/v-hotel-new1.jpg"
          alt="Andaz Unveiled | Weddings"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg mb-2">
          Andaz Unveiled | Weddings
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          Our attentive and personalized services can make your dream
          wedding come true at Andaz Delhi.
        </p>
        <button className="text-sm font-semibold flex items-center gap-1 text-orange-600">
          SEE DETAILS <span>⟶</span>
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-72">
      <div className="relative w-full h-48">
        <Image
          src="/images/v-hotel-new1.jpg"
          alt="Andaz Inspiration | Meetings"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-serif text-lg mb-2">
          Andaz Inspiration | Meetings
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          With multiple meeting venues, you’ll experience personalized
          services and professional facilities at Andaz Delhi.
        </p>
        <button className="text-sm font-semibold flex items-center gap-1 text-orange-600">
          SEE DETAILS <span>⟶</span>
        </button>
      </div>
    </div>
  </div>
</div>






{/* Footer Section */}
<footer className="bg-[#F4552C] text-black py-10 mt-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-black pb-6">
    {/* Left Section */}
    <div>
      <h3 className="font-serif text-lg mb-4">The Grand Shoba</h3>
      <p className="text-sm">
        Asset No. 1, Aerocity, New Delhi - 110037, Delhi, India
      </p>
      <p className="text-sm mt-2">Tel: +91 11 4903 1234</p>
    </div>

    {/* Center Section */}
    <div>
      <h4 className="font-semibold mb-2">Social</h4>
      <ul className="space-y-1 text-sm">
        <li><a href="#">YouTube</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Facebook</a></li>
      </ul>
    </div>

    {/* Right Section */}
    <div>
      <ul className="space-y-2 text-sm">
        <li><a href="#">Hotel Policies</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
  </div>

  {/* Big Andaz Logo with Brush */}
  <div className="relative mt-8">
    <img
      src="/images/footer-brush.png"
      alt="Brush Background"
      className="absolute left-0 bottom-0 w-1/2"
    />
    <h1 className="text-[6rem] font-serif text-center z-10 relative">THE GRAND SHOBA</h1>
  </div>
</footer>



{/* World of Hyatt Section */}
<BrandSection/>
    </section>



  );
}
