var express = require('express');
var app = express();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/react_1', function(req, res) {
    res.render('react_1');
});

app.get('/react_2', function(req, res) {
    res.render('react_2');
});

app.get('/react_3', function(req, res) {
    res.render('react_3');
});

app.get('/react_4', function(req, res) {
    res.render('react_4');
});

app.get('/react_5', function(req, res) {
    res.render('react_5');
});

app.get('/react_6', function(req, res) {
    res.render('react_6');
});

app.get('/react_7', function(req, res) {
    res.render('react_7');
});

app.get('/react_8', function(req, res) {
    res.render('react_8');
});

app.get('/react_9', function(req, res) {
    res.render('react_9');
});

app.get('/test', function(req, res) {
    res.render('test');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})