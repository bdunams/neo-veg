// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
//    required: true
  },
  GoogleId: {
    type: String,
    required: true,
    unique: true
  },
  Garden: [{
    type: Schema.Types.ObjectId,
    ref: "Veg"
  }]
});

// Create the Model
var User = mongoose.model("User", UserSchema);

// Export it for use elsewhere
module.exports = User;
