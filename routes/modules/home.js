const express = require('express')
const router = express.Router()
const Shorturl = require('../../models/shorturl')
const generateShorturl = require('../../models/generate_shorturl')


// browse all restaurants
router.get('/', (req, res) => {
  Shorturl.find()
    .lean()
    .then(shorturls => {
      shorturls.forEach(shourturl => {
      })
      const shorturl = generateShorturl()
      console.log('short:', shorturl)
      res.render('index', { shorturls })
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  console.log(req.body)
  Shorturl.find()
    .lean()
    .then(shorturls => {
      shorturls.forEach(shorturl => {
      })
      res.render('index', { shorturls })
    })
    .catch(err => console.error(err))
})

module.exports = router