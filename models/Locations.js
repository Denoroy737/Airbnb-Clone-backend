const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocationSchema = new Schema({
    images:{
        data: Buffer,
        contentType: String
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true, 
    },
    distance:{
        type: String,
        required: true, 
    },
    price:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('location', LocationSchema);