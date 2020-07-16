//Importing Required Modules
const router = require('express').Router();
const passport = require('passport');

//Login Page Route
router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

//Login with Google Route
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

//Redirection after Google Login
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  res.redirect('/profile');
});

module.exports = router;
