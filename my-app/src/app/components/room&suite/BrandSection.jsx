// components/BrandGrid.js
import Image from "next/image";

const brands = [
  {
    category: "LUXURY",
    logos: [
      "/room&suite/logo1.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
      "/room&suite/logo4.png",
      "/room&suite/logo5.png",
    ],
  },
  {
    category: "LIFESTYLE",
    logos: [
      "/room&suite/logo6.png",
     "/room&suite/logo1.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
      "/room&suite/logo4.png",
      "/room&suite/logo5.png",
    ],
  },
  {
    category: "INCLUSIVE",
    logos: [
     "/room&suite/logo4.png",
     "/room&suite/logo1.png",
      "/room&suite/logo3.png",
      "/room&suite/logo4.png",
      "/room&suite/logo5.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
    ],
  },
  {
    category: "CLASSICS",
    logos: [
        "/room&suite/logo3.png",
        "/room&suite/logo2.png",
       "/room&suite/logo4.png",
     "/room&suite/logo1.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
    ],
  },
  {
    category: "ESSENTIALS",
    logos: [
       "/room&suite/logo6.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
      "/room&suite/logo4.png",
      "/room&suite/logo5.png",
      "/room&suite/logo2.png",
      "/room&suite/logo3.png",
    ],
  },
];

export default function BrandSection() {
  return (
    <section className="  bg-white  sm:p-10">
      {/* Header */}
      

      {/* Categories */}
      <div className="border-4 p-2 mb-25  md:m-25 border-orange-600">
        <div className="flex justify-center mb-6">
        <div className="bg-orange-600 text-white px-4 py-2 text-sm font-bold uppercase">
          World of The Grand Shoba
        </div>
      </div>
         {brands.map((group, i) => (
        <div key={i} className="mb-8 p-4">
          <p className="text-orange-600 font-semibold mb-4">{group.category}</p>
          <div className="flex flex-wrap  items-center gap-4 border-t border-gray-300 pt-4">
            {group.logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo}
                  alt="brand logo"
                  width={60}
                  height={60}
                  className="h-auto w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ))}


      <div className="flex justify-center mt-6">
        <div className="bg-orange-600 text-white px-4 py-2 text-sm font-bold uppercase">
          Be More Here
        </div>
      </div>

      </div>

      
      {/* Note */}
      <p className="text-center text-sm pb-15 mt-[-95px] text-gray-600">
        *Coming soon to World of The Grand Shoba
      </p>
    </section>
  );
}
