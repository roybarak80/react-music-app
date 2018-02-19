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

// Answer API requests.
app.get('/api', cors(), function (req, res) {
  Artist.find(function (err, artists) {
    if (err)
      res.send(err);
    res.send(JSON.stringify(artists));
  });
});

app.get('/artist/:id', cors(), function (req, res) {
  
  const artist_id = req.param.id;
  
  uId = ObjectId(artist_id);
  console.log(uId);
  Artist.findOne({"_id":'5a89fe850b9338bd2f2ed5b3'},function (err, artists) {
    if (err)
      res.send(err);
    res.send(JSON.stringify(artists));
  });
});


// app.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
// });

app.listen(PORT, function () {
  console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});

