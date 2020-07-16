const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const sequelize = require('../config/db');
const User = require('../models/user');

module.exports = (passport) => {
  passport.serializeUser((profile, done) => {
    done(null, profile);
  });

  passport.deserializeUser((id, done) => {
    var user = User.findOne({ where: { googleid: id } });
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect',
      },
      (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');

        var name = profile._json.name;
        var id = profile.id;
        User.findOne({ where: { googleid: id } })
          .then((user) => {
            if (user) {
              console.log('User Already Exist');
              done(null, response[0]);
            } else {
              User.create({
                username: name,
                googleid: id,
                password: 'hanish1234',
              })
                .then((res) => {
                  console.log('User Added');
                })
                .catch((err) => {
                  console.log(err);
                });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    )
  );
};
