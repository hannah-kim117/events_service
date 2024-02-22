const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to handle the form submission and fetch events from SeatGeek
app.post('/events', async (req, res) => {
    const { lat, lon, city, state } = req.body;

    const urls = [
        `https://api.seatgeek.com/2/events?lat=${lat}&lon=${lon}&client_id=Mzk5Nzg1MjN8MTcwODQ2MTQxNC44NDU3NTgy`,
        `https://api.seatgeek.com/2/events?q=${city},${state}&client_id=Mzk5Nzg1MjN8MTcwODQ2MTQxNC44NDU3NTgy`
    ];
    
    for (const url of urls) {
        try {
            // Make a request to the SeatGeek API
            const response = await axios.get(url);
            const events = response.data.events;
    
            // Send the list of events back to the user
            res.send(events);
            return
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };
    res.status(500).send('Failed to fetch events');
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
