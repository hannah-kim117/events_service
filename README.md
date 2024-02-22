# Event Search Service

This repository contains a microservice written with Express that fetches event data from the SeatGeek API based on the city and state provided by the user and formats the data in a more readable manner. 

## How to Request Data

### HTTP Method and URL
To request data from this microservice, make an HTTP POST request to the '/events' endpoint with the city and state parameters in the request body. The exact URL for the POSt request should be 'http://localhost:3000/events'. The content type will be 'application/JSON' which indicates that the body of the request will be in JSON format. Therefore, it must return a 'response' object as JSON. 
This app is set up to be hosted on http://localhost:3000/.
If the PORT number needs to be changed, this can be done in the app.js file. Any changes made to the PORT number should be reflected in the URL as well. 



### Example Call
```
document.getElementById('eventSearchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;

    try {
        const response = await fetch('http://localhost:3000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lat, lon, city, state })
        });

        const events = await response.json();
        displayEvents(events);
    } catch (error) {
        console.error('There was an error fetching events:', error);
    }
});
```


## How to Receive Data
The backend will respond with a JSON array containing event data based on the provided city and state. The '/events' endpoint in the Express application will handle POST requests from the client-side and make GET requests to the SeatGeek API. The 'events' data will be sent back to the client with the requested data from the SeatGeek API. 

### Example Response
```
[
  {
    "title": "Concert",
    "datetime_local": "2024-02-25T19:00:00",
    "venue": {
      "name": "Madison Square Garden",
      "city": "New York",
      "state": "NY"
    }
  },
  {
    "title": "Comedy Show",
    "datetime_local": "2024-03-10T20:00:00",
    "venue": {
      "name": "Comedy Club",
      "city": "New York",
      "state": "NY"
    }
  }
]
```

## UML Diagram
![image](https://github.com/hannah-kim117/events_service/assets/116202217/88fbdb32-f9be-4d37-b3c0-c9a94e2809b9)


