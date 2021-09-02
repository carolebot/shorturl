mongoose.js

const mongoose = require('mongoose')

// mongodb and mongoose ///////////////////
mongoose.connect('mongodb://localhost/shorturl', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db