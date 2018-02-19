var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArtistSchema   = new Schema({

    id: String,
    name: String,
    cover: String,
    bio: String,
    albums: Array,
    genre: String
   
});

module.exports = mongoose.model('Artist', ArtistSchema);