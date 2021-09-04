const express = require('express')
const router = express.Router()
const Shorturl = require('../../models/shorturl')
const generateShorturl = require('../../models/generate_shorturl')
const website = 'http://localhost:3000/'

// browse all restaurants
router.get('/', (req, res) => {
  console.log(req.protocol, req.get('host'))
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    const { rawurl } = req.body
    const checkurls = await Shorturl.find({ rawurl }).lean()
    if (checkurls.length) {
      console.log(checkurls[0].shorturl)
      return res.render('index', {
        result: true,
        shorturl: `${website}${checkurls[0].shorturl}`
        
      })
    }
    const shorturl = generateShorturl()
    Shorturl.create({ shorturl, rawurl })
    res.render('index', { website, shorturl })

  } catch (err) {
    console.log(err)
  }
})

// router.get('/:shorturl', (req, res) => {
//   const shorturl = req.params.shorturl
//   const rawurl = Shorturl.find({shorturl})
//     .lean()
//     .then((url) => {
//       console.log(rawurl)
//       console.log(`${website}${rawurl}`)
//      res.redirect(200, `${website}${rawurl}`)
//     })
//     .catch(err => console.error(err))
// })

module.exports = router