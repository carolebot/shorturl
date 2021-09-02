const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorturlSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  shorturl: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('shorturl', shorturlSchema)