import React from 'react'

export default function Bgtest() {
  return (
  <div className="relative py-16 px-6 bg-white">
  {/* Main paper texture background */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/textures/paper-texture.png')",
    }}
  ></div>

  {/* Overlay color strip (right side teal) */}
  <div
    className="absolute top-0 right-0 w-40 h-full bg-teal-700 -skew-y-3"
    style={{ clipPath: "polygon(60% 0, 100% 0, 100% 100%, 0 100%)" }}
  ></div>

  {/* Decorative splash */}
  <img
    src="/shapes/splash-yellow.png"
    alt="decoration"
    className="absolute right-12 top-1/2 w-24 h-24"
  />

  {/* Content wrapper */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <h2 className="text-5xl font-serif mb-4">Rooms & Suites</h2>
    <p className="text-lg mb-6 max-w-2xl">
      Each guest room is thoughtfully designed and decorated with locally inspired details, 
      and each contains one of 401 unique artworks inspired by Delhi.
    </p>

    {/* Tabs + Button row */}
    <div className="flex justify-between items-center">
      <div className="flex space-x-6">
        <button className="border-b-2 border-red-500 pb-1">Rooms</button>
        <button className="pb-1">Suites</button>
      </div>
      <button className="border px-6 py-2 uppercase">View All Rooms</button>
    </div>
  </div>
</div>

  )
}
