const express = require('express');
const app = express(); //in a single project we can have multiple express application, by calling express like a function it generates a new application that representats a running express app

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});



const PORT = process.env.PORT || 5000; //if there is an env variable that has been defined use it, default use 5000
app.listen(PORT); //express instructs node to listen to port 5000