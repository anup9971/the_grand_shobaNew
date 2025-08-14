// components/Footer.tsx
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2B2A29] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">RESERVATIONS</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">Modify / Cancel</a></li>
            <li><a href="#" className="hover:underline">Retrieve Hotel Bill</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">CUSTOMER SERVICE</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">CORPORATE SITES</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers ↗</a></li>
            <li><a href="#" className="hover:underline">Investor Relations ↗</a></li>
            <li><a href="#" className="hover:underline">Hyatt Development ↗</a></li>
            <li><a href="#" className="hover:underline">Corporate Responsibility</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3">EXPLORE MORE</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">Travel Advisors</a></li>
            <li><a href="#" className="hover:underline">Corporate Travel</a></li>
            <li><a href="#" className="hover:underline">Residences</a></li>
            <li><a href="#" className="hover:underline">Gift Cards ↗</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Left */}
        <div>
          <h3 className="font-bold">THE HYATT.COM BEST RATE GUARANTEE</h3>
          <button className="border mt-2 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </div>

        {/* Center */}
        <div>
          <h3 className="font-bold mb-2">GET THE MOBILE APP</h3>
          <div className="flex gap-3">
            <img src="/appstore.png" alt="App Store" className="h-10" />
            <img src="/googleplay.png" alt="Google Play" className="h-10" />
          </div>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-bold mb-2">CONNECT WITH HYATT</h3>
          <div className="flex gap-3 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

