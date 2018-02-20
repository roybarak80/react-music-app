const express = require('express');
const path = require('path');
var cors = require('cors');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
var Artist = require('./model/artist');

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.

const app = express();

process.env.MONGOLAB_URI = 'mongodb://root:1234@ds249605.mlab.com:49605/music-app';
//mongodb://root:1234@ds163612.mlab.com:63612/cars-index123
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("DB connection alive");
});
// Priority serve any static files.
//app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

//login

app.get('/login', cors(), function (req, res) {
  
  res.status(200).send('some text'); 
});


// Answer API requests.
app.get('/api', cors(), function (req, res) {
  Artist.find(function (err, artists) {
    if (err)
      res.send(err);
    res.send(JSON.stringify(artists));
  });
});

app.get('/artist/:url_name', cors(), function (req, res) {
  
  const artist_name = req.params.url_name;
 

  Artist.findOne({"url_name":artist_name},function (err, artists) {
    if (err)
      res.send(err);
    res.send(JSON.stringify(artists));
  });

 
});

function requiresLogin(req, res, next) {
  var foo =1;
  if (foo==2) {
    console.log(123)
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    res.redirect('http://localhost:3000');
  }
}
app.get('/testlogin', requiresLogin, function(req, res, next) {
  res.status(200).send('some text'); 
});


// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});

