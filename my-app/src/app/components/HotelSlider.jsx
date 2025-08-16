"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

// 👇 hotelData yaha hona chahiye
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
  // ... baaki ka data
];

export default function HotelSlider() {
  const [visible, setVisible] = useState(3);
  const GAP_PX = 24;
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) {
        setVisible(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisible(2); // tablet
      } else {
        setVisible(3); // desktop
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const calc = () => {
      if (!viewportRef.current) return;
      const vw = viewportRef.current.clientWidth;
      const width = (vw - GAP_PX * (visible - 1)) / visible;
      setCardWidth(Math.max(260, Math.floor(width)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [visible]);

  const maxIndex = useMemo(
    () => Math.max(0, hotelData.length - visible),
    [visible]
  );

  // ... aapka slider UI code (map hotelData) yaha likha hoga
}
