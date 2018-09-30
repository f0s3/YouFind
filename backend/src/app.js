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

//DONE: (POST) /register
app.post('/register', (req,res) => {
  console.log(req.body)
  User.create({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    devices: []
  }).then(r=>res.json(r))
})

//DONE: (GET) /login/username/password
app.get('/login/:username/:password', (req, res) => {
  User.findOne({name: req.params.username, password: req.params.password})
  .then(user => {
    if (user) res.status(201).json(user)
    res.status(400).json({error: "Cannot find user"})
  })
});

//DONE: (GET) /users
app.get('/users', (req, res) => {
  User.find().then(users => res.json(users))
})

//DONE: (GET) /users/uid
app.get('/users/:uid', (req, res) => {
User.findById(req.params.uid)
  .then(user => res.json(user))
});

//DONE: (DELETE) /users/uid
app.delete('/users/:uid', (req, res) => {
  User.findByIdAndRemove(req.params.uid)
  .then(user => {
    res.sendStatus(204)
  })
})

//DONE: (GET) /users/uid/devices
app.get('/users/:uid/devices', (req, res) => {
  User.findOne({_id: req.params.uid})
  .then(user => {
    if (user) res.status(201).json(user.devices)
    else res.status(400).json({error: "Something went wrong."})
  })
});

//DONE: (POST) /users/uid/devices/deviceName
app.post('/users/:uid/devices/:deviceName', (req, res) => {
  let device = {name: req.params.deviceName, messages: [{text: "", date: Date.now()}]}
  User.findByIdAndUpdate({_id: req.params.uid}, {$push:{devices:device}}, {new:true})
  .then(user => {
    if (user) res.status(201).json(user.devices)
    else res.status(400).json({error: "Something went wrong."})
  })
});

//DONE: (DELETE) /users/uid/devices/id
app.delete('/users/:uid/devices/:id', (req, res) => {
  User.findById(req.params.uid,(err,user) => {
    let devices = user.devices
    console.log(devices)
    for (let i = 0;i < devices.length;i++) if (req.params.id == devices[i]._id) devices.splice(i,1);
    user.devices = [{      //_id: mongoose.Schema.Types.ObjectId,
          name: "nnasd",
          incidents: 1,
          messages: [{
            text: "String",
            date: new Date()
          }]}]
    user.save((err, prod) => {
      res.json(prod)
    })
  })
});

//DONE: (GET) /users/:uid/devices/:id/generateLink
app.get('/users/:uid/devices/:id/generateLink', (req, res) => {
  User.findOne({_id: req.params.uid}).then((user) => {
    res.json({email: user.email, link: `localhost:15000/users/Anonymous/${req.params.id}/messages`})
  })
})

//DONE: (GET) /users/uid/devices/deviceId/messages
app.get('/users/:uid/devices/:deviceId/messages', (req, res) => {
  User.findById({_id: req.params.uid})
  .then(user => {
    let devices = user.devices;
    for (let i = 0;i < devices.length;i++) {
      if (devices[i]._id == req.params.deviceId) {
        res.json(devices[i].messages);
      }
    }
  })
})

//TODO: (POST) /users/uid/devices/deviceId/messages
app.post('/users/:uid/devices/:deviceId/messages', (req, res) => {
  User.findById(req.params.uid,(err,user) => {
console.log(user.devices)
    let device= user.devices.find(ks=> ks._id==req.params.deviceId)
    console.log(req.body, req.body.text)
    device['messages'] = [...device['messages'], {text: req.body.text, date: new Date()}]

    user.save((err, prod) => {
      res.json(prod)
    })
  })
})

app.listen(port, () => console.log('App is listening on port '+ port +'!'))
