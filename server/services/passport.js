const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //1 arg means we are trying to fetch something out of mongoose. User Class declaration

passport.serializeUser((user, done) => {
    done(null, user.id); //puts id into cookie
})

passport.deserializeUser((id, done) => { //finds the user object corresponding to the id and attaches it to the req object for us to use 
    User.findById(id)
        .then((user) => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    //we already have a record with the given profile ID
                    done(null, existingUser);
                } else {
                    //we don't have a user record with this ID, make a new record
                    new User({ googleId: profile.id })
                        .save() //"new User" creates the instance and .save() actually saves it to the database
                        .then(user => done(null, user));  //`done` means it tells passport to proceed with the next step of the auth flow by passing in either an `error` or `auth object` like the user object. 
                }
            });
    }
    )
);