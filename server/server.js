const express = require('express');
const bodyParser = require('body-parser');
const calculations = require('./modules/calculations');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.post('/add-numbers', (req, res) => {
    let x = +req.body.x;
    let y = +req.body.y;
    let result = {result: x+y}; 
    req.body.assignment = '+';
    req.body.result = result.result; 
    calculations.push(req.body);  
    res.send(result);
});

app.post('/subtract-numbers', (req, res) => {
    let x = +req.body.x;
    let y = +req.body.y;
    let result = {result: x-y};
    req.body.assignment = '-';
    req.body.result = result.result;
    calculations.push(req.body);
    res.send(result);
});

app.post('/multiply-numbers', (req, res) => {
    let x = +req.body.x;
    let y = +req.body.y;
    let result = {result: x*y};
    req.body.assignment = '*';
    req.body.result = result.result;
    calculations.push(req.body);
    res.send(result);
});

app.post('/divide-numbers', (req, res) => {
    let x = +req.body.x;
    let y = +req.body.y;
    let result = {result: x/y};
    req.body.assignment = '/';
    req.body.result = result.result;
    calculations.push(req.body);
    res.send(result);
});

app.get('/get-calculations', (req, res) => {
    res.send(calculations);
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});