// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var HistorySchema = new Schema({
  Search: {
    type: String
  },
  Time: {
    type: Date,
    default: Date.now
  }
});

// Create the Model
var History = mongoose.model("History", HistorySchema);

// Export it for use elsewhere
module.exports = History;
