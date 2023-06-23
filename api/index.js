const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();
app.use(cors());


app.get('/', (req, res) => {
    res.json("Frist api to respon "+Date.now());
});

app.get('/test', (req, res) => {
    res.json("Test api to respon "+Date.now());
});
if (process.env.API_PORT) {
    app.listen(process.env.API_PORT);
}

module.exports = app;