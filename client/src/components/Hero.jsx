import React from 'react';
import HeroVideo from '../assets/hero.mp4'

const Hero = () => {
  return (
    <section id='home' className="relative h-[80vh] flex items-center justify-center">
      <div className="video-container absolute top-0 left-0 w-full h-full">
        <video className="w-full h-full object-cover" autoPlay muted loop>
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      </div>
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
