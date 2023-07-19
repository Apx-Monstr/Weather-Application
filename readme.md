# Weather Application

## Description

It is a weather application, with an api server(backend) which responds to users Get requests, by fetching the current temperature from openweatherAPI, which is then reflected on frontend, which is built using React, and backend uses express.js for REST API.

Request Format (Server)
{"cities":["Ohio", "Paris", "Mumbai"]}

Server Response
{"weather":{"Ohio":"24C", "Paris":"23C","Mumbai":"34C"}}

Inorder to run the backend
```cmd
git clone <this repo>

cd backend

npm install

node .
```

In order to run Frontend
```cmd
git clone <this repo>

cd frontend

npm install

npm start
```

The backend Server will run on localhost:8080 and frontend will run on localhost:3000

Happy Coding!!!