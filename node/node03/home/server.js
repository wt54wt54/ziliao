const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// create application/json parser

const HomeRouter = require('./homeRouter')

app.use('/home',HomeRouter)

app.listen(3000,()=>{
  console.log('server start')
})