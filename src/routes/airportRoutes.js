const express = require("express")
const router = express.Router()
const airportUrl = "/airports"
const airportService = require("../service/airportService")
const Airport = require("../model/airportModel")
const authToken = require("../middleware/authToken")

router.get(airportUrl, authToken, async (req,res)=>{
    try{
        const allAiports = await airportService.getAllAirports();
        const filterAirportData = allAiports.map(airport=>({
            airportId: airport.airportId,
            airportCode: airport.airportCode,
            airportName: airport.airportName,
            city: airport.city,
            country: airport.country
        }));

        console.log(filterAirportData);
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

router.patch(`${airportUrl}/:id`, async (req,res)=>{
    try{

     const id = req.params.id
     const body = req.body

     await airportService.updateAirport(id, body)
     res.status(204).send("Airport Data Updated")


    }catch(err){
        console.error(err)
        res.status(500).send("Server error")
    }
})

router.delete(`${airportUrl}/:id`, async (req,res)=>{
    try{
        const id = req.params.id
        await airportService.deleteAirport(id)   
        res.status(204).send("Airport Data Deleted")
    }catch(err){
        console.error(err)
        res.status(500).send("Server error")
    }
   
})

module.exports = router