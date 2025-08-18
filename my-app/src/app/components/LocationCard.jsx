// components/LocationCard.jsx
import React from "react";

export default function LocationCard() {
  return (
    <div className="relative bg-[#ffffff] flex justify-center items-center min-h-screen">
      {/* Background Brush Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-brush.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-black mt-[-300px] md:mt-[0] flex flex-col md:flex-row items-stretch p-0 h-[300px] w-[95%] md:w-[80%]">
        {/* Left Content */}
        <div className="bg-[#f4f4f4] rounded-none md:rounded-l-xl p-6 shadow-lg w-full md:w-1/2 flex flex-col justify-center">
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
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=v hotel the grand shoba , 1031, Gate no. 2,  Mahipalpur , Vasant kunj Bypass, Road, Mahipalpur Extension, New Delhi, delhi, Delhi 110037&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
