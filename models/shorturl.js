const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorturlSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('Expense', shorturlSchema)