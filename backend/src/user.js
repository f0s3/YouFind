const mongoose = require('mongoose');
mongoose.connect('mongodb://f0s3:ofurig54@ds115533.mlab.com:15533/users');

const User = new mongoose.Schema(
  {
    name: {type: String, unique: true},
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
