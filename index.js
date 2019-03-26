// implement your API here
const express = require('express');

const db = require('./data/db');
const server = express();
server.use(express.json()); // helps pass body and turns it into json

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

     server.post('/api/users', (req, res) => {
    // const user = {name:req.body.name, bio:req.body.bio}
    if (!req.body){
        res.status(400).json({
            message: 'Cant find ID'
        })
    }
            db.insert(req.body)
               .then(users => {
                   res.status(200).json({
                       success: true,
                       users
                   })
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
