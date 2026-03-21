const express = require("express")
const app = express()
const PORT = 3500
const airportRoutes = require("./routes/airportRoutes")
const mongoose = require("mongoose")

app.use(express.json())
app.use("/airticket/api/v1",airportRoutes)

app.get("/",(req,res)=>{
   res.send("Hello CMJD-112")
})

mongoose.connect("mongodb://localhost:27017/airTicketerCmjd112")
.then(()=>{
    console.log("MongoDB Connected")

})
.catch((err)=>{
    console.error("Failed to connect MongoDB",err)
})

app.listen(PORT, ()=>{
    console.log("Server started at PORT ",PORT)
})