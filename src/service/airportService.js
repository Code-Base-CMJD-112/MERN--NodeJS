
const Airport = require("../model/airportModel")

async function getAllAirports(){
  return Airport.find()
}

async function saveAirport(airport){
   const savedAirport = new Airport(airport)
   return savedAirport.save()
}


async function updateAirport(airportId, aiport){
   return Airport.findOneAndUpdate({airportId: airportId},airport,{new: true})
}


async function deleteAirport(airportId){
   return Airport.findOneAndDelete({airportId})
}

module.exports = { getAllAirports, saveAirport,updateAirport, deleteAirport}

