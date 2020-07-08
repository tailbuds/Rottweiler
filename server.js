const express = require('express');
const app = express();
const sequelize = require('./config/db');

//Creating Models

const actionMaster = require('./models/actionmaster');

const roleMaster = require('./models/rolemaster');

const user = require('./models/user');

const userBase = require('./models/userbase');

const userRoles = require('./models/userroles');

const userSettings = require('./models/usersettings');

const valid = require('./models/valid');

// Relation between Models

user.hasMany(userRoles);
user.hasMany(userSettings);
userBase.belongsTo(user);

app.listen(5000);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
