require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { userRouter } = require('./routes/user.route');
const { connectionToMongoAtlas } = require('./config/dbConfig');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is up!');
});

app.use('/user', userRouter);

app.listen(8080, async(req, res) => {
  await connectionToMongoAtlas();
  console.log('Server is running');
});