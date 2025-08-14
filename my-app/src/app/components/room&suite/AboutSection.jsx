// components/Footer.js
import { FiExternalLink } from "react-icons/fi";

export default function AboutSection() {
  return (
    <footer className="bg-[#F15A37] text-black py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Hotel The Grand Shoba</h2>
        <hr className="border-black mb-6" />

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address */}
          <div>
            <p>
              Asset No. 1, Aerocity, New Delhi - 110037, Delhi, India
            </p>
            <p className="mt-2">Tel: +91 11 4903 1234</p>
          </div>

          {/* Links */}
          <div>
            <a href="#" className="block hover:underline">
              Hotel Policies
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              Careers <FiExternalLink size={14} />
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="font-bold">Social</p>
            <a href="#" className="block hover:underline">
              YouTube
            </a>
            <a href="#" className="block hover:underline">
              Instagram
            </a>
            <a href="#" className="block hover:underline">
              Twitter
            </a>
            <a href="#" className="block hover:underline">
              Facebook
            </a>
          </div>

        </div>
          <p className="text-center font-serif text-2xl md:text-7xl pt-15">HoTeL ThE GrAnD ShoBa</p>
      </div>
    </footer>
  );
}
