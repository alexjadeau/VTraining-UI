var express = require('express');
var login = require('./routes/login'),
    dashboard = require('./routes/dashboard');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets'));

app.use('/login', login).use('/dashboard', dashboard);

app.listen(8080);