const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mpesa API credentials
const consumerKey = 'YOUR_CONSUMER_KEY';
const consumerSecret = 'YOUR_CONSUMER_SECRET';
const baseUrl = 'https://api.safaricom.co.ke';

// Generate access token
const generateAccessToken = async () => {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  const config = {
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.get(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, config);
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to generate access token:', error.response.data);
    throw error;
  }
};

// Make Mpesa STK push request
const makeStkPushRequest = async (accessToken, phoneNumber, amount, description) => {
  const payload = {
    BusinessShortCode: 'YOUR_BUSINESS_SHORTCODE',
    Password: 'YOUR_PASSWORD',
    Timestamp: 'YOUR_TIMESTAMP',
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: phoneNumber,
    PartyB: 'YOUR_BUSINESS_SHORTCODE',
    PhoneNumber: phoneNumber,
    CallBackURL: 'YOUR_CALLBACK_URL',
    AccountReference: 'YOUR_ACCOUNT_REFERENCE',
    TransactionDesc: description,
  };

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(`${baseUrl}/mpesa/stkpush/v1/processrequest`, payload, config);
    return response.data;
  } catch (error) {
    console.error('Failed to make STK push request:', error.response.data);
    throw error;
  }
};

// Handle donation request
app.post('/donation', async (req, res) => {
  const { phoneNumber, amount, description } = req.body;

  try {
    const accessToken = await generateAccessToken();
    const stkPushResponse = await makeStkPushRequest(accessToken, phoneNumber, amount, description);

    // Handle the stkPushResponse and send the appropriate response to the client
    res.json({ result: stkPushResponse });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
