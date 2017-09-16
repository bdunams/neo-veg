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
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('LOGGING IN')
  
    User.findOne({ 'GoogleId': profile._json.id }, function (err, user) {
      console.log(err, user);
      if (err) { 
        console.log(err)
        //return done(err); 
      }
      if (!user) {
        User.create({
          Name: profile._json.displayName,
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

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

