const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Playlist Schema
const PlayListSchema = new Schema({
name:String,
  songs: [],
  user: {},
})

module.exports = mongoose.model('PlayList', PlayListSchema);