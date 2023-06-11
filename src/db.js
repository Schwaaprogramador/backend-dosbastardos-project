//--------MODELOS-------------
const mongoose = require('mongoose');
const userModel = require('./Models/User.js');
const postModel = require('./Models/Post.js');


//-----------Mongose--------
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI)