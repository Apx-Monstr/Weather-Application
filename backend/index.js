const express = require('express');
const axios = require("axios");

const app = express();
app.use(express.json());
const PORT = 8080;
const KEY = "f1f0698ed56d5c77a1fe1b2dbeaded58"

app.get("/getWeather", (req,res)=>{
    const reqData = req.body;
    // console.log(reqData.cities);
    cities = reqData.cities;
    const data = {"weather":{}};
    if (cities.length > 0){
        for (const i in cities) {
            const city = cities[i];
            console.log(city);
            axios.get('http://api.openweathermap.org/data/2.5/weather', {
                params: {
                  q: city,
                  appid: KEY,
                  units: 'metric',
                }})
            .then((response) => {
                const resData = response.data;
                data.weather[city] = Math.round(resData.main.temp) + "C";
                if (Object.keys(data.weather).length === cities.length){
                    res.status(201).send(data);
                }
            }).catch((err) => {
                res.status(500).send(data);
            });
        }
    }else{
        res.status(400).send(data);
    }
})

app.listen(
    PORT,
    ()=>console.log("I am running at localhost:8080")
)