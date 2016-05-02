var express = require('express');
var router = express.Router();
var Set = require('../models/set');

/* GET set listing. */
router.get('/', function(req, res, next) {
    Set.find({})
        .exec(function(err, setData) {
            if (err) {
                res.send(err);
            }

            res.json(setData);
        });
});


// create a new post
router.post('/', function(req, res, next) {

   var newSet = new Set();

   newSet.userid = 'user1';
   newSet.setName = 'name';
   
   newSet.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Set created' });
        });
});

module.exports = router;
