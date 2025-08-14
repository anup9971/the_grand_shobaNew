"use client";
import { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaTripadvisor, FaRegCalendarAlt } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import MobileReviews from "./MobileReviews";

// const reviews = [
//   {
//     id: 1,
//     title: "Amazing Stay and Conference at Grand shoba",
//     rating: 5,
//     review:
//       "Amazing hotel with very professional and courteous staff. From banquet to house keeping to front desk, Grand shoba has amazing team that would take care of your needs",
//     date: "August 2025",
//     author: "Rajansharma1009",
//     response: null,
//   },
//   {
//     id: 2,
//     title: "Spotless, great food and best customer service",
//     rating: 5,
//     review:
//       "The staff is quite respectful and helpful. The hotel was spotless and the food was excellent. I will come back next time I go to Delhi.",
//     date: "August 2025",
//     author: "Erica L",
//     response: `Dear Erica, Thank you for your kind words... We’re thrilled to hear you enjoyed your stay and our hospitality. We look forward to welcoming you again!`,
//   },
//   {
//     id: 3,
//     title: "Very nice people and excellent hospitality.",
//     rating: 5,
//     review:
//       "Excellent hospitality and great experience. Food quality was amazing. Soul pantry and Annamayya is superb. Staff is very courteous.",
//     date: "August 2025",
//     author: "Suruchi D",
//     response: "Thank you so much for your kind feedback!",
//   },
//   {
//     id: 4,
//     title: "Fantastic place with great service",
//     rating: 4,
//     review:
//       "Loved the location and ambience. Staff was very attentive. Will visit again.",
//     date: "August 2025",
//     author: "John Doe",
//     response: null,
//   },
// ];

export default function ReviewsSlider() {
  const [expanded, setExpanded] = useState({});
  const toggleResponse = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    arrows: true,
  
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

  return (
    <>
 


     <div className="md:block hidden">
        <section className="max-w-7xl   bg-white mx-auto px-4 py-10">
      
      <div className="flex  flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-3xl font-semibold text-blue-900">
            What our Guests Say
          </h2>
          <div className="flex items-center mt-3">
            <FaTripadvisor className="text-4xl text-black mr-2" />
            <div>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                <span className="ml-2 font-bold">4.5/5</span>
              </div>
              <p className="text-sm text-gray-600">
                From 1412 reviews on Tripadvisor
              </p>
            </div>
          </div>
        </div>
      </div>

   <Slider {...settings} className="reviews-slider">
        {reviews.map((review) => (
          <div key={review.id} className="px-2">
            <div className="bg-white border rounded-md shadow-sm p-5 h-full flex flex-col justify-between">
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
          </div>
        ))}
      </Slider>
      
    
    </section>
     </div>

    <MobileReviews/>

      
    </>
  );
}
