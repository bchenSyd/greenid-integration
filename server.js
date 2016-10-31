var express = require('express')
var app = express()
var path = require('path')
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.post('/', function(req, res){
    var userName = req.body.givenNames
    var html = 'hello ' + userName + ' you have passed identity verification'
    res.send(html)
})
app.listen(8000)
console.log('listening on http://loclahost:8000')