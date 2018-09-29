const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/youfind');

const User = new mongoose.Schema(
  {
    name: String,
    password: String,
    devices: [{
      name: String,
      incidents: Number,
      messages: [{
        text: String,
        date: Date
      }]
    }]
  });

module.exports = mongoose.model('User', User);
