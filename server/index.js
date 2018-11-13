const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

mongoose.connect(keys.mongoURI);

//express() is a function  returned from require('express'). express() function creates an object internally then returns it. Its not a constructor because it doesn't use the new keyword even though it returns an object.
//function makes sense because we could have multiple express apps and if it just returns an object, due to JS require's caching we would be also refering to the same app object.
//The export object is instead changed to be a function instead
const app = express(); //in a single project we can have multiple express application, by calling express like a function it generates a new application that representats a running express app
require('./routes/authRoutes')(app); //authRoutes returns a function and we immediately invoke the function and pass in app.






const PORT = process.env.PORT || 5000; //if there is an env variable that has been defined use it, default use 5000
app.listen(PORT); //express instructs node to listen to port 5000