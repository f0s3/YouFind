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
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

//DONE: /login
app.get('/login/:username/:password', (req, res) => {
  User.findOne({name: req.params.username, password: req.params.password})
  .then(user => {
    if (user) res.status(201).json(user)
    res.status(400).json({error: "Cannot find user"})
  })
});

//DONE: /users/uid
app.delete('/users/:uid', (req, res) => {
  User.findByIdAndRemove(req.params.uid)
  .then(user => {
    res.sendStatus(204)
  })
})

//DONE: /register
app.post('/register', (req,res) => {
  console.log(req.body)
  User.create({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    password: req.body.password,
    devices: req.body.devices
  }).then(r=>res.json(r))
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

//DONE: /users/uid/devices
app.get('/users/:uid/devices', (req, res) => {
  User.findOne({_id: req.params.uid})
  .then(user => {
    if (user) res.status(201).json(user.devices)
    else res.status(400).json({error: "Something went wrong."})
  })
});

//DONE: /users/uid/devices/deviceName
app.post('/users/:uid/devices/:deviceName', (req, res) => {
  let device = {name: req.params.deviceName, messages: [{text: "", date: Date.now()}]}
  User.findByIdAndUpdate({_id: req.params.uid}, {$push:{devices:device}}, {new:true})
  .then(user => {
    if (user) res.status(201).json(user.devices)
    else res.status(400).json({error: "Something went wrong."})
  })
});

app.delete('/users/:uid/devices/:id', (req, res) => {
  User.findOne({_id: req.params.uid}).then((user) => {
    res.json(user.devices.splice())
  })
});

app.listen(port, () => console.log('App is listening on port '+ port +'!'))
