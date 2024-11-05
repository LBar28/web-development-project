const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to handle form submissions
app.post('/contact', (req, res) => {
    const formData = req.body; // Contains form data from the request body
    console.log('Form Data Received:', formData);

    // Respond back to the client
    res.send('Form data received successfully');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
