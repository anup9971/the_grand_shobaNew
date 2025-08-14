// RelatedRooms.jsx
import { rooms } from "@/roomData";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import { FaStar, FaTripadvisor, FaRegCalendarAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
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
export default function MobileReviews({ id }) {
    let router = useRouter()
  // Filter out the current room
const [expanded, setExpanded] = useState({});
  const toggleResponse = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const reviews = [
  {
    id: 1,
    title: "Amazing Stay and Conference at Grand shoba",
    rating: 5,
    review:
      "Amazing hotel with very professional and courteous staff. From banquet to house keeping to front desk, Grand shoba has amazing team that would take care of your needs",
    date: "August 2025",
    author: "Rajansharma1009",
    response: null,
  },
  {
    id: 2,
    title: "Spotless, great food and best customer service",
    rating: 5,
    review:
      "The staff is quite respectful and helpful. The hotel was spotless and the food was excellent. I will come back next time I go to Delhi.",
    date: "August 2025",
    author: "Erica L",
    response: `Dear Erica, Thank you for your kind words... We’re thrilled to hear you enjoyed your stay and our hospitality. We look forward to welcoming you again!`,
  },
  {
    id: 3,
    title: "Very nice people and excellent hospitality.",
    rating: 5,
    review:
      "Excellent hospitality and great experience. Food quality was amazing. Soul pantry and Annamayya is superb. Staff is very courteous.",
    date: "August 2025",
    author: "Suruchi D",
    response: "Thank you so much for your kind feedback!",
  },
  {
    id: 4,
    title: "Fantastic place with great service",
    rating: 4,
    review:
      "Loved the location and ambience. Staff was very attentive. Will visit again.",
    date: "August 2025",
    author: "John Doe",
    response: null,
  },
];

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
    <div className="max-w-7xl md:hidden bg-white mx-auto px-4 py-8">
      
      <div className="grid grid-cols-1 shadow-md p-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
            {/* Room Image */}
            <div className="relative">
         <Slider {...settings} className="reviews-slider">
        {reviews.map((review) => (
          <div key={review.id} className="px-2">
            
              <div>
                <h3 className="text-lg font-semibold text-blue-900">
                  {review.title}
                </h3>
                <div className="flex items-center mt-2">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-500" />
                    ))}
                  <span className="ml-2 text-sm font-medium">
                    {review.rating}/5
                  </span>
                </div>
                <p className="mt-3 text-gray-700 text-sm">{review.review}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-4">
                  <FaRegCalendarAlt />
                  <span>{review.date}</span>
                  <span>|</span>
                  <span>{review.author}</span>
                </div>
              </div>

      


      
              {review.response && (
                <div className="mt-4">
                  {expanded[review.id] ? (
                    <>
                      <button
                        onClick={() => toggleResponse(review.id)}
                        className="text-blue-700 text-sm font-medium flex items-center"
                      >
                        Hide Response <FiChevronUp className="ml-1" />
                      </button>
                      <div className="mt-2 text-gray-700 text-sm bg-gray-50 p-3 rounded-md border">
                        <p className="font-semibold">Response from</p>
                        <p className="mt-1">{review.response}</p>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={() => toggleResponse(review.id)}
                      className="text-blue-700 text-sm font-medium flex items-center"
                    >
                      See the Hotel's Response <FiChevronDown className="ml-1" />
                    </button>
                  )}
                </div>
              )}
            </div>
        ))}
      </Slider>
           </div>

           
          </div>
       
    </div>
  );
}
