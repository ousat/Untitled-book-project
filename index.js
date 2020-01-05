var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var url_routes = require('./router')

app.use(bodyParser.json())  // support passing application/json datatype
// 
app.use('/bookstore', url_routes)

app.listen(32000, () => console.log(`listening on port 32000`))
