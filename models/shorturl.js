const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorturlSchema = new Schema({
  shorturl: {
    type: String,
    required: true
  },
  rawurl: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('shorturl', shorturlSchema)