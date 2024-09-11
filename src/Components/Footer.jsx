import React from 'react';
import { icons } from '../assets/data';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 text-black bg-white">
      <div className="container grid grid-cols-1 gap-8 px-6 mx-auto mb-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Section 1 */}
        <div>
          <img src={icons.logo} alt="Logo" className="mb-4 w-[160px]" />
          <p className="mb-4 font-normal font-jost">
            Praesent nec nisl a purus blandit viverra. Pellentesque habitant morbi tristique senectus.
          </p>
          <div className="flex gap-4">
            <FaFacebookF className="text-xl hover:text-blue-600" />
            <FaWhatsapp className="text-xl hover:text-green-500" />
            <FaInstagram className="text-xl hover:text-pink-600" />
            <FaTiktok className="text-xl hover:text-black" />
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="mb-4 text-xl font-semibold font-jost">Info</h2>
          <ul className="space-y-2 font-normal font-jost">
            <li><a href="#" className="hover:text-gray-600">Custom Service</a></li>
            <li><a href="#" className="hover:text-gray-600">F.A.Q.'s</a></li>
            <li><a href="#" className="hover:text-gray-600">Ordering Tracking</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-600">Events</a></li>
            <li><a href="#" className="hover:text-gray-600">Popular</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="mb-4 text-xl font-semibold font-jost">Services</h2>
          <ul className="space-y-2 font-normal font-jost">
            <li><a href="#" className="hover:text-gray-600">Sitemap</a></li>
            <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-600">Your Account</a></li>
            <li><a href="#" className="hover:text-gray-600">Advanced Search</a></li>
            <li><a href="#" className="hover:text-gray-600">Term & Condition</a></li>
            <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="mb-4 text-xl font-semibold font-jost">Account</h2>
          <ul className="space-y-2 font-normal font-jost">
            <li><a href="#" className="hover:text-gray-600">About Us</a></li>
            <li><a href="#" className="hover:text-gray-600">Delivery Information</a></li>
            <li><a href="#" className="hover:text-gray-600">Discount</a></li>
            <li><a href="#" className="hover:text-gray-600">Advanced Search</a></li>
            <li><a href="#" className="hover:text-gray-600">Custom Service</a></li>
            <li><a href="#" className="hover:text-gray-600">Term & Condition</a></li>
          </ul>
        </div>

      </div>
      
      <p className="my-1 text-base text-center font-jost">
           &copy; {new Date().getFullYear()} All rights reserved. | Created by Sanuka Athapaththu
      </p>
    </footer>
  );
}

export default Footer;
