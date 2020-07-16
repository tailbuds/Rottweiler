//Importing Required Modules
const express = require('express');
const router = require('express').Router();
const passport = require('passport');

//Login with Google Route
router.get(
  '/auth/google',
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
