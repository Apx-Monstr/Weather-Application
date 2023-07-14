const app = require("express")();
const PORT = 8080;

app.post("/getWeather",(req, res)=>{
    res.status(201).send(
        {
            hello:"from sample express server",
        }
    )
})
app.listen(
    PORT,
    ()=>console.log("I am running at localhost:8080")
)