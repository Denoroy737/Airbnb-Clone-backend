const MONGOCONNECT = require('./conn.js');
require('dotenv').config({path: "./config.env"})
const express = require('express')
const cors = require('cors') 
const app = express()
const port = 5000

MONGOCONNECT();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

// Available Routes
app.use('/api/v1/locations', require('./routes/locations'))


app.listen(port, () => {
  console.log(`Airbnb-Clone backend listening at http://localhost:${port}`)
})