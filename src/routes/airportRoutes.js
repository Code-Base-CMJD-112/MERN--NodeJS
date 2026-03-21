const express = require("express")
const router = express.Router()
const airportUrl = "/airports"
const airportService = require("../service/airportService")
const Airport = require("../model/airportModel")

router.get(airportUrl, async (req,res)=>{
    try{
        const allAiports = await airportService.getAllAirports();
        const filterAirportData = allAiports.map(airport=>({
            airportId: airport.airportId,
            airportCode: airport.airportCode,
            airportName: airport.airportName,
            city: airport.city,
            country: airport.country
        }));

        console.log(filterData);
        res.status(200).json(filterAirportData);
    }catch(err){
        console.error(err)
    }

})

router.post(airportUrl, async (req,res)=>{
    try{
        const airport = new Airport({
            airportCode: req.body.airportCode,
            airportName: req.body.airportName,
            city: req.body.city,
            country: req.body.country
        })
      await airportService.saveAirport(airport)
      res.status(201).send("Saved airport data successfully")  
    }catch(err){
        console.error(err)
    }
})

router.patch(airportUrl, async (req,res)=>{
    //Logic 
})

router.delete(airportUrl, async (req,res)=>{
    //Logic 
})

module.exports = router