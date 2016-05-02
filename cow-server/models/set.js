var mongoose = require('mongoose');


var setSchema = mongoose.Schema({

    userid: String,
    setName: String

});

// -----------   methods ---------------



// create the model and expose it
module.exports = mongoose.model('Set', setSchema);

