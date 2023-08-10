import React from 'react';
import DonateButton from './DonateButton';

const CallToAction = ({ title, description }) => {
  return (
    <div className="bg-green-900 py-8 relative">
      <div className="container mx-auto px-4 max-w-[1100px] text-center relative z-10">
        <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
        <p className="text-white mb-4">{description}</p>
        <DonateButton text="Donate Now"/>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
};

export default CallToAction;
