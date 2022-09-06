const express = require('express');

//Server initialization
const app = express();
const path = require('path');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
//Middlewares
app.use(express.urlencoded({extended: false}));
//Global Variables

//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
//Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;