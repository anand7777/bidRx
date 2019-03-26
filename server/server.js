const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const port = 3000
const db = require('../database/queries')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('dist'))

app.get('/api', db.getRequests);

app.post('/api', db.createRequest);

app.delete('/delete', db.deleteRequest);

app.get('*', (req, res, next) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})


app.listen(port, () => console.log(`Listening on port ${port}`))


