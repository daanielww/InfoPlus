const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('user'); //1 arg means we are trying to fetch something out of mongoose. User Class declaration

//https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
https://stackoverflow.com/questions/28691215/when-is-the-serialize-and-deserialize-passport-method-called-what-does-it-exact
//only called during the authentication process
passport.serializeUser((user, done) => {
    done(null, user.id); //saves id into the sessionand cookie and is later retrieved in each request to be used to get the user object which will be attached to the req object of every request
})

//called on every request to attached the user object onto the req object
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
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id })

            if (existingUser) {
                //we already have a record with the given profile ID
                done(null, existingUser);
            } else {
                //we don't have a user record with this ID, make a new record
                const user = new User({ googleId: profile.id }).save() //"new User" creates the instance and .save() actually saves it to the database
                done(null, user);  //`done` means it tells passport to proceed with the next step of the auth flow by passing in either an `error` or `auth object` like the user object. 
            }

        }
    )
);