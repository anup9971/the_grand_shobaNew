// RelatedRooms.jsx
import { rooms } from "@/roomData";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 z-10 text-black hover:text-2xl transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8592;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 z-10 text-black hover:text-2xl transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8594;
  </button>
);
export default function RelatedRooms({ id }) {
    let router = useRouter()
  // Filter out the current room
  const relatedRooms = rooms.filter((room) => room.id !== id);
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
     autoplay: false,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="max-w-7xl bg-white mx-auto px-4 py-8">
      <h2 className="text-3xl font-light text-gray-900 mt-14 mb-0">
       Other Available Rooms
      </h2>

      <p className="mb-10 font-light text-black ">These rooms are available for your selected dates, but do not match one or more of your applied filters.</p>
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedRooms.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md border overflow-hidden flex flex-col"
          >
            {/* Room Image */}
            <div className="relative">
          <Slider {...settings}>
            {item?.image?.map((src, i) => (
              <div key={i} className="relative w-full h-72 sm:h-96">
                <Image
                  src={src}
                  alt={`Hotel image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Room Type */}
              <h3 className="text-xl font-bold text-blue-900">{item.type}</h3>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                {item.description}
              </p>

              {/* Details Link */}
              {/* <button className="text-blue-600 mt-2 text-sm hover:underline">
                View Room Details
              </button> */}

              {/* Rates */}
              <div className="mt-4 flex-1">
                {/* {item.rates?.map((rate, idx) => ( */}
                  <div
                    // key={idx}
                    className="flex justify-between items-start mt-2"
                  >
                    <div>
                      <p className="font-bold">{item.label}</p>
                      <p className="text-xs text-gray-500">Avg/Night</p>
                    </div>
                    <p className="font-bold text-green-700">&#8377; 5,999/</p>
                  </div>
                {/* ))} */}

                {/* More rates link */}
                {item.rates?.length > 0 && (
                  <button className="text-blue-600 mt-2 text-sm hover:underline">
                    + More rates
                  </button>
                )}
              </div>

              {/* Book Button */}
              <button onClick={()=> router.push(`/room&suite/${item.id}`)} className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 w-full">
                SELECT & BOOK
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
