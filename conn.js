const mongoose = require('mongoose');

const MONGODBURI = `${process.env.MONGODB_URI}`

const MONGOCONNECT = ()=>{
    mongoose.connect(MONGODBURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = MONGOCONNECT;