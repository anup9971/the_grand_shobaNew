"use client";

import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick"; // react-slick
import { rooms } from "@/roomData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import BookingModal from "./BookingModal";
import { useRouter } from "next/navigation";
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8592;
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-[#ffffff6e] p-2 rounded-full shadow hover:bg-[#ffffff8e]"
  >
    &#8594;
  </button>
);

export default function RoomCard() {
  
  let  router = useRouter()
  const [view, setView]=useState([
    "All", "Airport View","View Varies","City View"

  ])
  let [type, setType]=useState([
    "All","King Bed","Twin Beds"
  ])

  const [selectedView, setSelectedView] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredRooms = rooms.filter(
    (room) =>
      (selectedView === "All" || room.view === selectedView) &&
      (selectedType === "All" || room.type.includes(selectedType))
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
          
  return (
    <>
      <div className="bg-[#111111]">
         <div className="max-w-6xl mx-auto px-4 py-8 ">
                {/* Filters */}
                <div className="flex flex-wrap md:pt-15 md:pb-15 pb-8 md:gap-25 gap-7 mb-6">
                  <div>
                    <span className="font-semibold block pb-3 text-white mr-2">Room Type:</span>
                    
                    {type.map((x)=>{
                        return(
                              <button onClick={()=>setSelectedType(x)} className={`border px-3 mr-2 py-1   rounded  ${selectedType ===x ?"bg-gray-200 text-black":"text-white hover:text-black hover:bg-gray-100"}`}>
                                        + {x}
                                </button>
                        )
                    })}
                  </div>
                  <div >
                    <span className="font-semibold block md:pb-3 text-white mr-2">View:</span>
                 
                            {view.map((x)=>{
                                return(
                                    <button onClick={()=>setSelectedView(x)} className={`border px-3 mr-2 mt-3 md:mt-0 py-1  rounded ${selectedView ===x ?"bg-white text-gray-800":"text-white hover:bg-white hover:text-gray-800" }`}>
                                        + {x}
                                    </button>
                                )
                            })}
                  </div>
                </div>
          
                {/* Room Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredRooms.map((room) => (
                    <div key={room.id} className="bg-white shadow rounded-2xl overflow-hidden">
                      {/* Image Slider */}
                      {room.image?.length > 0 && (
                        <Slider {...sliderSettings}>
                          {room.image.map((img, index) => (
                            <div key={`${room.id}-${index}`} className="relative w-full h-56 md:h-64 lg:h-72">
                              <Image
                                src={img}
                                alt={`${room.type} image ${index + 1}`}
                                fill
                                className="object-cover rounded-t-lg"
                              />
                            </div>
                          ))}
                        </Slider>
                      )}
          
                      {/* Room Info */}
                      <div className="p-4">
                        <h3 className="text-black text-xl pb-5 md:text-2xl">
                          {room.type} with {room.view}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {room.size} / {room.view}
                        </p>
                        <p className="text-gray-700 mb-2">{room.description}</p>
                        <button onClick={()=> {router.push(`/check-availability/${room.id}`)}} className="border px-3 mt-4 mb-6  py-2 w-full text-black   font-semibold hover:bg-black hover:text-white">
                          View Rates
                        </button>
                      </div>
                    </div>
                  ))}
                  {/* <BookingModal  open={isOpen} roomId={roomId}  onClose={() => setIsOpen(false)} /> */}
                </div>
                 
           <hr className="bg-amber-50 w-full h-0.5 mt-25" />
          </div>
          {/* <div className="h-1 w-full bg-amber-50"></div> */}
      </div>
    </>
  );
}
