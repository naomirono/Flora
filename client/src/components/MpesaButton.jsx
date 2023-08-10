import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MpesaButton = ({ text, to }) => {
  const [loading, setLoading] = useState(false);

  const handleMpesaClick = async () => {
    setLoading(true);

    // Add your M-Pesa integration logic here
    // For example, initiate the M-Pesa payment and handle the response

    setLoading(false);
  };

  return (
    <Link to={to}>
      <button
        className="bg-[#006600] text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 border border-white hover:text-green-900 hover:bg-white hover:border-green-900"
        onClick={handleMpesaClick}
        disabled={loading}
      >
        {loading ? 'Processing...' : text}
      </button>
    </Link>
  );
};

export default MpesaButton;
