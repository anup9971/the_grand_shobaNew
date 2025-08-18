// components/ReviewCard.js
import { FaStar, FaStarHalfAlt, FaTripadvisor } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <section
      className="relative text-black bg-[#EEEEEE] bg-cover bg-no-repeat py-20"
      style={{
        backgroundImage: "url('/your-bg-image.jpg')", // replace with your image
        backgroundPosition: "top",
      }}
    >
      <div className="max-w-4xl mx-auto bg-[#ffffff] rounded-2xl shadow-lg p-8 relative z-10">
        {/* Title */}
        <h2 className="text-lg font-serif mb-2">Reviews</h2>
        <hr className="mb-6 border-black" />

        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left - Rating */}
          <div>
            <div className="flex items-center mb-2">
              <span className="text-5xl font-light">4.5</span>
              <span className="mx-2 text-4xl text-gray-400">/</span>
              <span className="text-3xl text-gray-500">5</span>
            </div>
            <div className="flex text-yellow-500 text-xl mb-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>

            <div className="flex items-center gap-2">
              <FaTripadvisor className="text-green-600 text-2xl" />
              <div>
                <p className="font-bold text-sm">
                  Tripadvisor Traveler Rating
                </p>
                <p className="text-gray-600 text-sm">
                  6,328 reviews
                </p>
              </div>
            </div>
          </div>

          {/* Right - Review Text */}
          <div>
            <p className="text-gray-700 italic">
              "A very comforting stay. Good location, rooms with windows facing
              the airport side offer an amazing view of the night operations of
              the airport. Spacious rooms surely give you satisfaction for value
              for money. Class matters and the grand shoba gives it to you."
            </p>
            <p className="mt-4 font-semibold">— anupamkapoor2000</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 border border-black rounded hover:bg-black hover:text-white transition">
            SEE ALL REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
}