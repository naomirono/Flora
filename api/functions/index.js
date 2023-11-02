const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({origin: true});
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Blog Post Schema and Model
const blogSchema = new mongoose.Schema({
  title: String,
  date: String,
  excerpt: String,
  image: String,
});

const Posts = mongoose.model('Posts', blogSchema);


// API Endpoints for Blog Posts
app.get('/blog', async (req, res) => {
  try {
    const blogData = await Posts.find();
    res.json(blogData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog data', details: err.message });
  }
});

// Donation Payment with Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/donation', async (req, res) => {
  try {
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
            unit_amount: 10 * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://treehaven-neyo.web.app/success',
      cancel_url: 'https://treehaven-neyo.web.app/cancel',
    });

    res.setHeader('Access-Control-Allow-Origin', 'https://treehaven-neyo.web.app'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); 

    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: 'Error creating payment session' });
  }
});

app.get('/success', (req, res) => {
  res.send('Thank you for your donation!');
});

app.get('/cancel', (req, res) => {
  res.send('Payment canceled.');
});

exports.app = functions.https.onRequest(app);

