const express = require ('express')
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const stripe = require ('stripe')('sk_test_51N9pFiDotCtyPckPygs3a7nWC7RypeIJ55aAqHDkNyYZTz0FYdpahi1piYpzrDMj5XN3rhHobivq6RFlyvAjae5m002qEpztp1')

app.post('/donation', async (req, res) => {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
              description: 'Your contribution can make a difference in restoring our planet. Help us plant more trees and combat climate change.',
            },
            unit_amount: 5 * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173',
      cancel_url: 'https://yourwebsite.com/cancel',
    });

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend's origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Adjust the allowed HTTP methods if needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Adjust the allowed headers if needed
  
    res.json({ id: session.id });
  });

  app.get('/success', (req, res) => {
    res.send('Thank you for your donation!');
  });
  
  app.get('/cancel', (req, res) => {
    res.send('Payment canceled.');
  });
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });