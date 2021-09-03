const express = require('express')
const router = express.Router()
const Shorturl = require('../../models/shorturl')
const generateShorturl = require('../../models/generate_shorturl')
const website = 'http://localhost:3000/'

// browse all restaurants
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { rawurl } = req.body
  const shorturl = generateShorturl()
  Shorturl.findById(rawurl)
    .then(Shorturl.create({ shorturl, rawurl }))
    .then(res.render('index', { website, shorturl}))
    .catch(err => console.error(err))
})

router.get('/:rawurl', (req, res) => {
  const rawurl = req.params.rawurl
    .then(() => {
      const shorturl = generateShorturl()
      res.redirect(200, `${website}${rawurl}`)
    })
    .catch(err => console.error(err))
})

module.exports = router