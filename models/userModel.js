const mongoose = require("mongoose");
const Schema = mongoose.Schema;




// User Schema
const UserSchema = new Schema({
firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    default: 2,
    required: true,
    type: Number,
  },
})

module.exports = mongoose.model('User', UserSchema);