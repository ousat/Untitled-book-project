var express = require('express')
var router = express.Router()

var user_controller = require('./controllers/user')

// Authentication requests

// authenticate and return response with jwt token
router.post('/login', function (req, res) {
  params = req.body
  response_data = user_controller.login(params)
  res.send(JSON.stringify(response_data))
})

// create user 
router.post('/register', async function (req, res) {
  params = req.body
  response_data = await user_controller.create_user(params)

  res.send(JSON.stringify(response_data))
})


router.post('/books/publish', function(req, res) {
  
})

router.get('/books', function(req, res) {
  
})

router.get('/books/:id', function(req, res){

})


router.post('/books/search', function(req, res){

})

router.post('/books/of-user', function(req, res){

})

router.post('/books/:id/unpublish', function(req, res){

})


module.exports = router
