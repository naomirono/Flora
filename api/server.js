const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/cms'; // Replace with your MongoDB connection string
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

const BlogPost = mongoose.model('BlogPost', blogSchema);

// API Endpoints for Blog Posts
app.get('/api/blog', async (req, res) => {
  try {
    const blogData = await BlogPost.find();
    res.json(blogData);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog data' });
  }
});

app.post('/api/blog', async (req, res) => {
  try {
    const newPost = req.body;
    await BlogPost.create(newPost);
    res.json({ message: 'Blog post added successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error adding blog post' });
  }
});

// Donation Payment with Stripe
const stripe = require('stripe')('sk_test_51N9pFiDotCtyPckPygs3a7nWC7RypeIJ55aAqHDkNyYZTz0FYdpahi1piYpzrDMj5XN3rhHobivq6RFlyvAjae5m002qEpztp1');

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
      success_url: 'http://localhost:5173/success', // Replace with your frontend success URL
      cancel_url: 'http://localhost:5173/cancel', // Replace with your frontend cancel URL
    });

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend's origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Adjust the allowed HTTP methods if needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Adjust the allowed headers if needed

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

// Start the server
const PORT = 3000; // Choose any available port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
