// components/Amenities.js
import { FaWifi, FaParking, FaConciergeBell, FaDog, FaSwimmingPool, FaSpa, FaBusinessTime } from "react-icons/fa";
import { MdRestaurant, MdRoomService, MdFitnessCenter, MdLocalLaundryService, MdOutlineCheckCircle } from "react-icons/md";
import Image from "next/image";

const amenitiesList = [
  { icon: <FaWifi />, label: "Free Internet Access" },
  { icon: <FaParking />, label: "Free Parking" },
  { icon: <MdRestaurant />, label: "On-Site Restaurant" },
  { icon: <MdRoomService />, label: "Room Service" },
  { icon: <MdFitnessCenter />, label: "Fitness Center" },
  { icon: <FaSwimmingPool />, label: "Pool" },
  { icon: <FaDog />, label: "Pet Friendly" },
  { icon: <FaSpa />, label: "Spa" },
  { icon: <MdOutlineCheckCircle />, label: "Digital Check-In" },
  { icon: <FaBusinessTime />, label: "Business Services" },
  { icon: <MdLocalLaundryService />, label: "Laundry" },
  { icon: <FaConciergeBell />, label: "Concierge" },
];

export default function Amenities() {
  return (
    <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 flex">
    
    {/* Left Side - Image (50% width, full height) */}
    <div className="relative w-1/2 h-[500px]">
      <Image
        src="/images/v-hotel-new7.jpg" // Replace with your image
        alt="Amenities"
        fill
        className="object-cover rounded-xl"
      />
    </div>

    {/* Right Side - Content (50% width) */}
    <div className="w-1/2 pl-8 flex flex-col justify-center">
      <h2 className="text-4xl font-semibold mb-6">Amenities</h2>
      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
        {amenitiesList.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-lg">
            <span className="text-black">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <button className="mt-8 px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition">
        SEE MORE +
      </button>
    </div>
  </div>
</section>
  );
}