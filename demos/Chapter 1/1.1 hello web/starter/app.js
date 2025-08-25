const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define the API route that prints hello Omar
app.get('/api/x', (req, res) => {
    console.log('hello X');
    res.json({ message: 'hello Ali' });
});

// Run the app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Click the button on the webpage to see "hello X" printed in the server console!');
});
