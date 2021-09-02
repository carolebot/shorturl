const express = require('express')
const router = express.Router()

// browse all restaurants
router.get('/', (req, res) => {
  Expense.find()
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
  Expense.find()
    .lean()
    .then(urls => {
      urls.forEach(url => {
      })
      res.render('index', { url })
    })
    .catch(err => console.error(err))
})

module.exports = router