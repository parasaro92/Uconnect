const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const dotenv = require('dotenv').config()



connectDB()

require('./models/user')
require('./models/post')
require('./models/comment')

app.use(express.json());

app.use(require('./routes/auth'))
app.use(require('./routes/post'))




const PORT = process.env.PORT | 5000;
app.listen(PORT, () => {
  console.log('server started');
});