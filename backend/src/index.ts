import express = require('express')
import BodyParser = require('body-parser')
import dotenv = require('dotenv')
import cors = require('cors')
import { MongoClient } from 'mongodb'
import { DB_URL } from './configs/Credentials'
import fooditiveRouter from './routers/FooditiveRouter'

const app: express.Application = express()
dotenv.config()
const PORT = process.env.PORT || 5000
const client = new MongoClient(process.env.DB_URL || DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))
app.use(cors())
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
//   next()
// })

// Handles /fooditive routes
app.use('/fooditive', fooditiveRouter)

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT)

  client.connect(function (err) {
    if (err) throw err
    console.log('Connected to database')
  })
})
