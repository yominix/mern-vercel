const express = require("express");
const dotenv = require('dotenv');
const app = express();
dotenv.config();


app.get('/',(req,res)=>{
    res.json("Frist api to respon");
});

app.get('/test',(req,res)=>{
    res.json("Test api to respon");
});

app.listen(process.env.API_PORT);

module.exports = app;