import React from 'react';
import backgroundImage from '../assets/hero1.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-[70vh] md:h-[89vh] flex items-center justify-center">
      <div className="background-image absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="container mx-auto text-center relative max-w-[1000px] ">
        <h1 className="text-white text-4xl font-bold mb-10">
          Planting Trees for a Greener Future
        </h1>
        <p className="text-white text-lg mb-8">
          Join us in our mission to restore the environment and combat climate change through tree planting initiatives. Together, we can make a significant impact on the planet by promoting sustainability, preserving biodiversity, and creating healthier ecosystems for future generations.
        </p>
        <button className="bg-white text-green-900 rounded-md px-6 py-3 font-bold hover:bg-green-100 mt-[90px]">
          Get Involved
        </button>
      </div>
    </section>
  );
};

export default Hero;
