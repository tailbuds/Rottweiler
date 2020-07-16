const express = require('express');
const app = express();
const sequelize = require('./config/db');
const passport = require('passport');
//Creating Models

const actionMaster = require('./models/actionmaster');

const roleMaster = require('./models/rolemaster');

const user = require('./models/user');

const userBase = require('./models/userbase');

const userRoles = require('./models/userroles');

const userSettings = require('./models/usersettings');

const valid = require('./models/valid');

//Templating Engine
app.set('view engine', 'ejs');

//Local Imports
const googleAuth = require('./routes/googleAuth');

//Database Connection
sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Relation between Models

user.hasMany(userRoles);
user.hasMany(userSettings);
userBase.belongsTo(user);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());
require('./controller/passportGoogleAuth')(passport);

//Routes
app.use('/auth', googleAuth);

app.listen(5000);
