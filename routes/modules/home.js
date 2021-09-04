const express = require('express')
const router = express.Router()
const Shorturl = require('../../models/shorturl')
const generateShorturl = require('../../models/generate_shorturl')
const website = process.env.MONGODB_URI || 'mongodb://localhost/shorturl'

// browse all restaurants
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    const { rawurl } = req.body
    const checkurls = await Shorturl.find({ rawurl }).lean()
    if (checkurls.length) {
      return res.render('index', {
        result: false,
        shorturl: `${website}${checkurls[0].shorturl}`,
      })
    }
    const shorturl = generateShorturl()
    Shorturl.create({ shorturl, rawurl })
    res.render('index', { website, shorturl, rawurl })

  } catch (err) {
    console.log(err)
  }
})

router.get('/:shorturl', async (req, res) => {
  try {
  const shorturl = req.params.shorturl
  const rawurl = await Shorturl.find({shorturl}).lean()
  if (!rawurl.length) {
    return res.render('index', {rawurl})
  }
    res.redirect(`${rawurl[0].rawurl}`)
  }
  
  catch(err) { 
    console.error(err)
  }
})

module.exports = router