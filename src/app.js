const express = require("express")
const app = express()
const PORT = 3500
const airportRoutes = require("./routes/airportRoutes")

app.use("/airticketer/api/v1",airportRoutes)

app.get("/",(req,res)=>{
   res.send("Hello CMJD-112")
})

app.listen(PORT, ()=>{
    console.log("Server started at PORT ",PORT)
})