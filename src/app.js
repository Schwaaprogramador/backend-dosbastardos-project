//-------------- EXPORTACIONES--------------------
const express = require('express')
const app = express();
const morgan = require('morgan');//npm morgan
const cors = require('cors'); //npm cors
require("dotenv").config();


//----------MIDDLEWARES---------------
app.use(morgan('dev'));
app.use(cors({credentials:true , origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/Imagenes', express.static(__dirname+'/Imagenes'))

app.get('/', (req, res)=>{
    res.send('test correct')
})