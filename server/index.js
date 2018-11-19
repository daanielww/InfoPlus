const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User'); //must come before passport bc we need to create user model first
require('./services/passport');

mongoose.connect(keys.mongoURI);

//express() is a function  returned from require('express'). express() function creates an object internally then returns it. Its not a constructor because it doesn't use the new keyword even though it returns an object.
//function makes sense because we could have multiple express apps and if it just returns an object, due to JS require's caching we would be also refering to the same app object.
//The export object is instead changed to be a function instead
const app = express(); //in a single project we can have multiple express application, by calling express like a function it generates a new application that representats a running express app

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize()); //create instance of passport
app.use(passport.session()); //need session to use cookies

require('./routes/authRoutes')(app); //authRoutes returns a function and we immediately invoke the function and pass in app.

//https://stackoverflow.com/questions/2100758/javascript-or-variable-assignment-explanation
const PORT = process.env.PORT || 5000; //if there is an env variable that has been defined use it, default use 5000
app.listen(PORT); //express instructs node to listen to port 5000