const express = require("express")
const router = express.Router()
const airportUrl = "/airports"
const airportService = ""

router.get(airportUrl, (req,res)=>{
    //Logic 
    res.status(200).send("Get data from Airport Router")
})

router.post(airportUrl, (req,res)=>{
    //Logic 
})

router.patch(airportUrl, (req,res)=>{
    //Logic 
})

router.delete(airportUrl, (req,res)=>{
    //Logic 
})

module.exports = router