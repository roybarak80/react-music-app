const express = require('express');
const path = require('path');
var cors = require('cors');
var mongoose   = require('mongoose');
var Car    = require('./model/car');
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.

  const app = express();

  process.env.MONGOLAB_URI ='mongodb://root:1234@ds163612.mlab.com:63612/cars-index123';
//mongodb://root:1234@ds163612.mlab.com:63612/cars-index123
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
console.log("DB connection alive");
});
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  app.get('/api',cors(), function (req, res) {
    Car.find(function(err, cars) {
      if (err)
          res.send(err);
          
      res.send(JSON.stringify(cars));
     // res.json(cars);
  });
    //res.set('Content-Type', 'application/json');
    //res.send('{"message":"sadsdassad!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });

