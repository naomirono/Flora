import React from 'react';

const CallToAction = ({ title, description, buttonText }) => {
  return (
    <div className="bg-green-500 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <button className="bg-white text-green-500 rounded-full py-2 px-6 font-semibold hover:bg-green-100 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
