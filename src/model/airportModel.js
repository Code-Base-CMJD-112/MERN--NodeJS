const mongoose = require("mongoose")
const { v4: uuid4} = require("uuid")

const airportSchema = new mongoose.Schema({
    airportId:{
        type: String,
        default:()=> uuid4(),
        unique: true
    },
    airportCode: {type: String, required: true},
    airportName:{type: String, required: true},
    city:{type: String, required: true},
    country:{type: String, required: true}
});

module.exports = mongoose.model("airports",airportSchema)

