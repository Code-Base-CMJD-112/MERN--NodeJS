
const airport = require("../model/airportModel")

async function getAllAirports(){
  return airport.find()
}

async function saveAirport(airport){
   const savedAirport = new airport(airport)
   return savedAirport.save()
}


async function updateAirport(airportId, aiport){
   return airport.findOneAndUpdate({airportId: airportId},airport,{new: true})
}


async function deleteAirport(airportId){
   return airport.findOneAndDelete({airportId})
}

module.exports = { getAllAirports, saveAirport,updateAirport, deleteAirport}

