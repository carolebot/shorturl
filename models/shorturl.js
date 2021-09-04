const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorturlSchema = new Schema({
  shorturl: {
    type: String,
    unique: true,
    required: true
  },
  rawurl: {
    type: String,
    unique: true,
    required: true
  }
})
module.exports = mongoose.model('shorturl', shorturlSchema)