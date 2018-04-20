const express = require('express');
const bodyParser = require('body-parser');
const calculations = require('./modules/calculations');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.post('/add-numbers', (req, res) => {
    calculations.push(req.body);
    console.log(calculations);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});