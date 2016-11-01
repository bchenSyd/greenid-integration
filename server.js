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
var port = process.env.port || 8010
app.listen(port)
console.log('listening on http://localhost:'+ port)