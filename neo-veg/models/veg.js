// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var VegSchema = new Schema({
  VegName: {
    type: String,
    required: true
  },
  Spacing: {
    type: String
  },
  Depth: {
    type: String
  },
  SoilTemp: {
    type: String
  },
  Hardiness: {
    type: String
  },
  Fertilize: {
    type: String
  },
  Water: {
    type: String
  },
  IndoorSeedStart: {
    type: Date
  },
  IndoorSeedEnd: {
    type: Date
  },
  OutdoorSeedStart: {
    type: Date,
    required: true
  },
  OutdoorSeedEnd: {
    type: Date,
    required: true
  },
  HarvestStart: {
    type: Date,
    required: true
  },
  HarvestEnd: {
    type: Date,
    required: true
  },
  Comments: {
  	type: String
  }
});

// Create the Model
var Veg = mongoose.model("Veg", VegSchema);

// Export it for use elsewhere
module.exports = Veg;
