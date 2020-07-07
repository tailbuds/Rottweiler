const express = require('express');
const app = express();
const sequelize = require('./config/db');

app.listen(5000);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
