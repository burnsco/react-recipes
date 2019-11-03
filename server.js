require('dotenv').config({path: 'variables.env'})

const mongoose = require('mongoose')
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`db connected`))
  .catch(err => console.error(err))

const express = require('express')
const app = express()

PORT = process.env.PORT || 4444
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
