import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/hero1.png';

const MpesaPay = () => {
    const [amount, setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentResponse, setPaymentResponse] = useState(null);

    const handlePayment = async () => {
        try {
            const response = await axios.post('/initiate-payment', {
                amount,
                phoneNumber
            });

            setPaymentResponse(response.data);
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <div
        className="bg-black min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8, // Set the desired opacity
        }}
      >
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-xl font-semibold mb-4">M-Pesa Payment Integration</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Amount:</label>
                    <input
                        type="number"
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Phone Number:</label>
                    <input
                        type="text"
                        className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <button
                    className="w-full bg-[#006600] text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                    onClick={handlePayment}
                >
                    M-Pesa Pay
                </button>
                {paymentResponse && (
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Payment Response:</h3>
                        <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(paymentResponse, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MpesaPay;
