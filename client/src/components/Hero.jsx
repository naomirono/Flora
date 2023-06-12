import React from 'react';

const Hero = () => {
  return (
    <section className="bg-green-900 py-24">
      <div className="container mx-auto text-center">
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
