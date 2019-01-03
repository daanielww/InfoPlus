const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User'); //must come before passport bc we need to create user model first
require('./services/passport');
require('./models/Survey');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

//express() is a function  returned from require('express'). express() function creates an object internally then returns it. Its not a constructor because it doesn't use the new keyword even though it returns an object.
//function makes sense because we could have multiple express apps and if it just returns an object, due to JS require's caching we would be also refering to the same app object.
//The export object is instead changed to be a function instead
const app = express(); //in a single project we can have multiple express application, by calling express like a function it generates a new application that representats a running express app

//all middlewares wired up to express with app.use they operate on incoming requires before they are sent off to handlers
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

//need this for serialize and deserialize to work
//kind of like route handlers that will catch every route.
//allows deserialize to be called on every incoming request to add the user object onto it
//before passing the request onto the next appropriate route handler.
//THATS WHY THESE COME BEFORE THE OTHER ROUTE HANDLERS. NEED TO ADD USER OBJECT BEFORE THE REQUEST CAN BE PROCESSED FURTHER
app.use(passport.initialize()); //create instance of passport
app.use(passport.session()); //need session to use cookies

//attaches all the routes onto the app object
require('./routes/authRoutes')(app); //authRoutes returns a function and we immediately invoke the function and pass in app.
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // express will serve up production assets
    // like our main.js file, or main.css file

    app.use(express.static('client/build')) //for ANY unrecognized route(all recognized ones will be handled above) look in client/build and respond with that

    //express will serve up the index.htm file
    // if it doesn't recognize the route

    const path = require('path')
    app.get('*', (req,res)=> {
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))
    })
}

//https://stackoverflow.com/questions/2100758/javascript-or-variable-assignment-explanation
const PORT = process.env.PORT || 5000; //if there is an env variable that has been defined use it, default use 5000
app.listen(PORT); //express instructs node to listen to port 5000