// implement your API here
const express = require('express');

const db = require('./data/db');
const server = express();

server.get('/api/users', (req, res) => {
    db.find()
       .then(users => {
           res.status(200).json(users);

       })
       .catch(({ code, message }) => {
           res.status(code).json({
            success:false,
            message: message
           })   
       })
    })
    server.get('/api/users/:id', (req, res) => {
        db.findById(req.params.id)
           .then(users => {
               res.status(200).json(users);
    
           })
           .catch(({ code, message }) => {
               res.status(code).json({
                success:false,
                message: message
               })   
           })
        })

server.listen(4005, () =>
  console.log('**** Server running **** ')
);
