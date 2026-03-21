const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3500
const airportRoutes = require("./routes/airportRoutes")
const authRoutes = require("./routes/authRoutes")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods: ['GET','POST','PATCH','PUT','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
}))

app.use("/airticket/api/v1",airportRoutes)
app.use("/airticket/api/v1",authRoutes)

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