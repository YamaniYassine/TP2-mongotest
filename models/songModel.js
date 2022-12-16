const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// Song Schema
const SongSchema = new Schema({
title:String,
  url: String,
  rating:  Number,
  artist: {}
})

module.exports = mongoose.model('Song', SongSchema);