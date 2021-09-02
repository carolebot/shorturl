const express = require('express')
const router = express.Router()
const Shorturl = require('../../models/shorturl')

// browse all restaurants
router.get('/', (req, res) => {
  Shorturl.find()
    .lean()
    .then(urls => {
      urls.forEach(url => {
      })
      res.render('index', { url })
    })
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  console.log(req.body)
  Shorturl.find()
    .lean()
    .then(shorturl => {
      shorturls.forEach(shorturl => {
      })
      res.render('index', { shorturl })
    })
    .catch(err => console.error(err))
})

module.exports = router