const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


let GOOGLE_CLIENT_ID = '137520573980-f2l1mo8qc5r0rspfccbabm38q1lk7lob.apps.googleusercontent.com';
let GOOGLE_CLIENT_SECRET = 'iQP1sq_w4OrHwKO0BOgputHs'

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return done(err, user);
//       });
  }
));