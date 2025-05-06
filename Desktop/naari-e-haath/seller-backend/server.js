const express = require('express');
const bodyParser = require('body-parser');

// Initialize express
const app = express();

// Middleware to parse JSON
app.use(bodyParser.json());

// Define a POST route to handle form submissions
app.post('/submit-seller', (req, res) => {
    const sellerData = req.body;

    // Here you can "store" the data (e.g., log it, or simulate saving to a database)
    console.log('Seller data received:', sellerData);

    // Send a success response
    res.status(200).send('Seller data received and stored successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
