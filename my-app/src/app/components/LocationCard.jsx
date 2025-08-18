// components/LocationCard.jsx
import React from "react";

export default function LocationCard() {
  return (
    <div className="relative bg-black flex justify-center items-center min-h-screen">
      {/* Background Brush Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-brush.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch p-0 h-[300px] w-[95%] md:w-[80%]">
        {/* Left Content */}
        <div className="bg-white rounded-none md:rounded-l-xl p-6 shadow-lg w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">The Grand Shoba</h2>
          <p className="flex items-center text-gray-700 mb-1">
            📍 1031, Gate no. 2,  Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi, delhi, Delhi 110037
          </p>
          <p className="flex items-center text-gray-700 mb-4">
            📞 +91  9953992143
          </p>

          <div className="flex flex-col gap-3">
            <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
              GETTING HERE
            </button>
            <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition">
              EXPLORE THE AREA
            </button>
          </div>
        </div>

        {/* Right Map */}
        <div className="w-full md:w-1/2 h-full">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.667136532476!2d77.08695531508366!3d28.549946982450776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193f0aef45b1%3A0xfdb569a6b8a9b51e!2sAndaz%20Delhi!5e0!3m2!1sen!2sin!4v1673522945678!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "0 12px 12px 0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
