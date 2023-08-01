import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from '../assets/donation.jpg'

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  
  return (
    <section id='contact' className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Image})` }}>
      <div className='bg-white bg-opacity-20 py-16 px-4 sm:px-8'>
      <div className="container max-w-[1200px] mx-auto border-4 border-[#7B1FA2] rounded-[24px] p-6 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-800 mb-6 pr-0 sm:pr-10">Have questions or want to get involved? We'd love to hear from you. Reach out to us using the contact details below or fill out the form and we'll get back to you as soon as possible.</p>
            <ul className="text-gray-800">
              <li className="mb-2"><FaEnvelope className="inline-block mr-2 text-[#7B1FA2]" /> Email: info@carecycle.org</li>
              <li className="mb-2"><FaPhoneAlt className="inline-block mr-2 text-[#7B1FA2]" /> Phone: +1234567890</li>
              <li className="mb-2"><FaTwitter className="inline-block mr-2 text-blue-500 hover:text-blue-700 cursor-pointer" /> Twitter: @carecycle</li>
              <li className="mb-2"><FaFacebook className="inline-block mr-2 text-blue-500 hover:text-blue-700 cursor-pointer" /> Facebook: @carecycle</li>
              <li><FaInstagram className="inline-block mr-2 text-pink-500 hover:text-pink-700 cursor-pointer" /> Instagram: @carecycle</li>
            </ul>
          </div>
          <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#7B1FA2] hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ContactSection;
