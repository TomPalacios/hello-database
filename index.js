const express  = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT        || 3000;
const db = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/hellodb';
const app = express();

const router = require('./routes/api/user');

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log(`DB connected @ ${db}`);
  })
  .catch(err => console.error(`Connection error ${err}`));

  app.use('/api', router);

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });