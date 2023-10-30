import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N9pFiDotCtyPckPQclsuxSOsulIBPbrqX69TxXAfbw1teutdVHSlhSypBWKOHXPfwq4oiA6R0FlhzXkgQf7FbsA00BSpiFNyf');

const DonateButton = ({ text }) => {
  const [loading, setLoading] = useState(false);

  const handleDonateClick = async () => {
    setLoading(true);

    const stripe = await stripePromise;

    const response = await fetch('https://us-central1-travel-wanderlust-neyo.cloudfunctions.net/app/donation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
      setLoading(false);
    }
  };

  return (
    <button
      className="bg-[#006600] text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-colors duration-300 border border-white hover:text-green-900 hover:bg-white hover:border-green-900"
      onClick={handleDonateClick}
      disabled={loading}
    >
      {loading ? 'Processing...' : text}
    </button>
  );
};

export default DonateButton;
