import React from 'react';

const Mission = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative bg-green-900">
      <div className="container mx-auto max-w-[1000px] px-4">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center text-white">Our Mission</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-100 text-start">
            At our organization, we are committed to making a lasting impact on the environment and communities through tree planting initiatives. We firmly believe that trees play a crucial role in combatting climate change, restoring habitats, and promoting a sustainable future. Through our dedicated efforts, we aim to create greener and healthier environments, improve air and water quality, mitigate the effects of deforestation, and enhance biodiversity. By planting trees, we empower individuals and communities to actively contribute to the preservation of our planet and build a better world for future generations.
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </section>
  );
};

export default Mission;
