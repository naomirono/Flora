import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-6 bg-green-900">
  <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-w-[1200px]">
    <div className="mb-4 sm:mb-0 hidden sm:block">
    <h2 className="text-4xl text-white hover:text-green-500">Flora</h2>
    </div>
    <div className="text-white sm:ml-4">
      <ul className="flex flex-wrap space-x-6">
        <li>
          <a href="/privacy-policy" className="text-white hover:text-green-500">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service" className="text-white hover:text-green-500">Terms of Service</a>
        </li>
        <li>
          <a href="/affiliations" className="text-white hover:text-green-500">Affiliations</a>
        </li>
      
      </ul>
    </div>
    <div className="flex space-x-4 mt-4 sm:mt-0">
      <a href="https://www.facebook.com/" className="text-white">
        <FaFacebook size={24} />
      </a>
      <a href="https://www.twitter.com/" className="text-white">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.instagram.com/" className="text-white">
        <FaInstagram size={24} />
      </a>
    </div>
  </div>
  <div className="border-t border-white mt-4 max-w-[1200px] mx-auto"></div>
  <div className="container mx-auto pt-4 text-center text-white text-sm">
    &copy; {new Date().getFullYear()} Flora. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
