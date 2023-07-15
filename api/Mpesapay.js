const express = require ('express');

 
const app = express();
const port = 3000;
 
// app.use(bodyParser.json());

app.post('/callback', (req, res) => {
  const paymentData = req.body;
 
  // Format the payment data using the FormatPaymentData helper method
  const { status, resultCode, message, data: paymentdata } = FormatPaymentData(paymentData);
 
  // Process the payment based on the status
  if (status === 'success') {
    // Save the payment data to the database
    // Replace the code below with your actual database logic
    // Example using MongoDB and Mongoose
    const Payment = require('./models/payment'); // Import your Payment model
    const newPayment = new Payment(paymentdata);
    newPayment.save()
      .then((savedPayment) => {
        console.log('Payment data saved:', savedPayment);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error('Error saving payment data:', error);
        res.sendStatus(500);
      });
  } else if (status === 'canceled') {
    console.log('Payment canceled:', message);
    res.sendStatus(200);
  } else if (status === 'failed') {
    console.log('Payment failed:', message);
    res.sendStatus(200);
  } else {
    console.log('Invalid payment status');
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});