import React from 'react';
import backgroundImage from '../assets/hero1.png'

const Hero = () => {
  return (
    <section id="home" className="relative h-[89vh] flex items-center justify-center">
      <div className="background-image absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-white text-4xl font-bold mb-4">
          Planting Trees for a Greener Future
        </h1>
        <p className="text-white text-lg mb-8">
          Join us in our mission to restore the environment and combat climate change through tree planting initiatives.
        </p>
        <button className="bg-white text-green-900 rounded-md px-6 py-3 font-bold hover:bg-green-100">
          Get Involved
        </button>
      </div>
    </section>
  );
};

export default Hero;
