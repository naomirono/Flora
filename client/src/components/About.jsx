import React from 'react';
import Image from '../assets/hero1.png'
import aboutVideo from '../assets/about.mp4'

const About = () => {
  return (
    <section id="about" className="py-14 md:py-20 max-w-[1100px] mx-auto">
      <div className="container mx-auto md:my-8 md:px-4 lg:px-0 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img
                src={Image}
                alt="Image 1"
                className="w-full md:max-w-md"
              />
              <video
                className="w-full md:w-5/6 absolute bottom-0 right-0 md:mr-[-10%] md:mb-[-17%]"
                autoPlay
                muted
                loop
              >
                <source src={aboutVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-20">
            <h2 className="text-4xl font-bold mb-4 text-center">About <span className='text-green-900'>  TreeHaven </span> </h2>
            <p className="text-lg">
              Our tree planting website is dedicated to making a positive impact on the environment and combating climate change. We believe that planting trees is a powerful way to restore ecosystems, sequester carbon dioxide, and create sustainable habitats for various species. With our mission to promote reforestation and environmental conservation, we strive to raise awareness about the importance of trees and inspire individuals to take action. By getting involved with our initiatives, you can contribute to creating a greener future for generations to come. Together, we can make a significant difference in preserving our planet's natural beauty and safeguarding its biodiversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
