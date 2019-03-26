// implement your API here
// implement your API here
const express = require('express');

const db = require('./data/db');
const server = express();

server.get('/api/users', (req, res) => {
    db.find()
       .then(hubs => {
           res.status(200).json(hubs);

       })
       .catch(({ code, message }) => {
           res.status(code).json({
            success:false,
            message: message
           })   
       })
    })

server.listen(4001, () =>
  console.log('**** Server is efin running **** ')
);
