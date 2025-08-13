"use client";
import Image from "next/image";

export default function RoomsSuites() {
  return (
    
    <>

        {/* ------------------------- for Destop screen ---------------------- */}
       <div className="bg-[#f8f8f8] md:flex hidden">
           <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-7xl text-gray-800 font-serif mb-6">Rooms & Suites</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left Content (1 column) */}
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At Andaz Delhi, the rooms are thoughtfully designed and decorated
            with locally inspired details, and each contains one of 401 unique
            artworks inspired by Delhi. Sophisticated details such as wooden
            floors create a residential comfort, while modern bath amenities
            and artistic integration invite guests to relax in style. View
            rooms offer a stunning view of the runway at Indira Gandhi
            International Airport, an exciting vantage point to watch aircraft
            taking off or touching down. If you are interested in our Hyatt
            Delhi Residences, which offer contemporary fully serviced
            apartments, please visit our Residences website to learn more.
          </p>

          {/* Check-in / Checkout */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="font-semibold text-gray-700">Check-in</p>
              <p className="text-2xl text-gray-500 font-serif">02:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Checkout</p>
              <p className="text-2xl text-gray-500 font-serif">12:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right Image (spans 2 columns) */}
        <div className="md:col-span-2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/room&suite/about.jpg" // Place your room image in /public folder
            alt="Room Image"
            width={1200}
            height={800}
            className="object-cover w-full h-auto"
          />
        </div>

      </div>
    </section>
       </div>



       {/* ------------------------------ for mobile screen ---------------------------- */}
       <div className="bg-[#f8f8f8] flex  md:hidden">
           <section className="max-w-7xl mx-auto px-4 py-10 md:py-16">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* Left Content (1 column) */}


        <div className="md:col-span-2 w-full h-[360px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/room&suite/about.jpg" // Place your room image in /public folder
            alt="Room Image"
            width={1200}
            height={800}
            className="object-contian w-full h-[360px] "
          />
        </div>

     {/* Heading */}
      <h2 className="text-4xl md:text-7xl text-gray-800 font-serif mb-[-24px] ">Rooms & Suites</h2>
     
        <div>
          <p className="text-gray-700 text-justify mb-6 leading-relaxed">
            At Andaz Delhi, the rooms are thoughtfully designed and decorated
            with locally inspired details, and each contains one of 401 unique
            artworks inspired by Delhi. Sophisticated details such as wooden
            floors create a residential comfort, while modern bath amenities
            and artistic integration invite guests to relax in style. View
            rooms offer a stunning view of the runway at Indira Gandhi
            International Airport, an exciting vantage point to watch aircraft
            taking off or touching down. If you are interested in our Hyatt
            Delhi Residences, which offer contemporary fully serviced
            apartments, please visit our Residences website to learn more.
          </p>

          {/* Check-in / Checkout */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div>
              <p className="font-semibold text-gray-700">Check-in</p>
              <p className="text-2xl text-gray-500 font-serif">02:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Checkout</p>
              <p className="text-2xl text-gray-500 font-serif">12:00 PM</p>
            </div>
          </div>
        </div>

        

      </div>
    </section>
       </div>
    </>
  );
}

