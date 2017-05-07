const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

console.log('Starting server...');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/new', (req, res) => {
  res.render('new.hbs');
});

app.listen(port);
