const passport = require('passport');
const express = require('express')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');


let GOOGLE_CLIENT_ID = '822292153722-crlcrans73ldnm1um27ovkffc8k1gj9o.apps.googleusercontent.com';
let GOOGLE_CLIENT_SECRET = '_cWF3jRTdI4XWYN_NU3s81gl';


// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "https://polar-savannah-52854.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
  
    User.findOne({ 'GoogleId': profile._json.id }, function (err, user) {
      if (err) { 
        console.log(err)
        return done(err); 
      }
      if (!user) {
        User.create({
          Name: profile._json.displayName,
          Email: profile._json.emails[0].value,
          GoogleId: profile._json.id
        }, function(err, user) {
          if (err) {
            console.log(err);
          }
          else {
            return done(null, user);
          }
        });
      }
      
      return done(null, user);
      
    });
  
  }
                                
));

// Passport Session Management
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {

  User.findOne({ 'GoogleId': user.GoogleId }, function (err, user) {
    return done(err, user); 
    
  })
});

