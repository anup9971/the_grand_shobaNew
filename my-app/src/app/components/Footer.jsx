import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#282828" }} className="text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-white mb-4">RESERVATIONS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Modify / Cancel</a></li>
            <li><a href="#">Retrieve Hotel Bill</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-white mb-4">CUSTOMER SERVICE</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-white mb-4">CORPORATE SITES</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Hyatt Development</a></li>
            <li><a href="#">Corporate Responsibility</a></li>
            <li><a href="#">Newsroom</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-white mb-4">EXPLORE MORE</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Travel Advisors</a></li>
            <li><a href="#">Corporate Travel</a></li>
            <li><a href="#">Residences</a></li>
            <li><a href="#">Gift Cards</a></li>
          </ul>
        </div>
      </div>

      {/* CTA + Apps + Social */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CTA */}
        <div>
          <h4 className="font-bold text-white mb-4">THE HYATT.COM BEST RATE GUARANTEE</h4>
          <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition">
            LEARN MORE
          </button>
        </div>

        {/* Mobile Apps */}
        <div>
          <h4 className="font-bold text-white mb-4">GET THE MOBILE APP</h4>
          <div className="flex gap-4">
            <img src="/images/app-store.png" alt="App Store" className="h-10" />
            <img src="/images/google-play.png" alt="Google Play" className="h-10" />
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-white mb-4">CONNECT WITH HYATT</h4>
          <div className="flex gap-4 text-white text-xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div style={{ backgroundColor: "#1e1e1e" }} className="text-gray-400 text-xs py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookie Center</a>
          <a href="#">Security & Safety</a>
          <a href="#">Modern Slavery and Human Trafficking</a>
          <a href="#">Do Not Sell or Share My Personal Information</a>
          <span>© 2025 Hyatt Corporation</span>
        </div>
      </div>
    </footer>
  );
}
