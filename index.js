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
            message: 'Bad Request'
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
                    message:"Please provide name and bio for the user."
                   })   
               })
            })

    server.delete('/api/users/:id', (req, res) => {
                db.remove(req.params.id)
                .then(deleted => {
                    res.status(204).end();
                })
                .catch(({code, message}) => {
                    res.status(code).json({
                        success:false,
                        message,
                    })
                })
            })
         server.put('/api/users/:id', (req, res) => {
                const id = req.params.id;
                const changes = req.body;
        
                db.update(id, changes)
                  .then((updated) => {
                    if(updated){
                      res.status(201).json({
                        success: true,
                        updated
                      })
                    }
                    else{
                      res.status(500).json({
                        success: false,
                        message: "The user could not be removed"
                      })
                    }
                  })
                  .catch(( { code, message } ) => {
                    res.status(code).json({
                      success: false,
                      message
                    })
                  })
              })
    
    
server.listen(4005, () =>
  console.log('**** Server running **** ')
);
