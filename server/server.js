const express = require('express');
const bodyParser = require('body-parser');
const calculations = require('./modules/calculations');
const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));



app.post('/add-numbers', (req, res) => {
    calculations.push(req.body);
    let x = +req.body.x;
    let y = +req.body.y;
    let result = {result: x+y};
    console.log(result);    
    res.send(result);
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});