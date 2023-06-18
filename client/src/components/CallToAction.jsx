import React from 'react';

const CallToAction = ({ title, description, buttonText }) => {
  return (
    <div className="bg-green-900 py-8 relative">
      <div className="container mx-auto px-4 max-w-[1100px] text-center relative z-10">
        <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <button className="bg-white text-green-900 rounded-full py-2 px-6 font-semibold hover:bg-green-500 hover:text-green-100 transition duration-300">
          {buttonText}
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
};

export default CallToAction;
