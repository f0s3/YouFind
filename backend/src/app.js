const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = 15000;
const mongoose = require('mongoose');
const User = require('./user.js');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

//TODO: /login
app.post('/login', (req, res) => {
  User.find({name: req.body.username})
  .then(user => {
    res.status(201).json(user)
  }).catch(error => res.status(400))
});

//DONE: /register
app.post('/register', (req,res) => {
  new User({
    name: req.body.name,
    password: req.body.password,
    devices: req.body.devices
  }).save().then(r=>res.json(r))
})

//DONE: /users
app.get('/users', (req, res) => {
  User.find().then(users => res.json(users))
})

//DONE: /users/uid
app.get('/users/:uid', (req, res) => {
User.findById(req.params.uid)
  .then(user => res.json(user))
});


app.get('/devices/:id', (req, res) => {
  if (req.params.id == 1) {
    console.log(req.params.id)
    res.send({messages: {text: 'test message'}});
  }
})

app.post('/devices/add', (req, res) => {
  //mongo stuff
});

app.delete('devices/remove', (req, res) => {
  //mongo stuff
});

app.listen(port, () => console.log('App is listening on port '+ port +'!'))
