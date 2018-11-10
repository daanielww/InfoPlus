const express = require('express');
const app = express(); //in a single project we can have multiple express application, by calling express like a function it generates a new application that representats a running express app

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});

app.listen(5000); //express instructs node to listen to port 5000