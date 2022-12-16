const mongoose = require('mongoose');
const Song = mongoose.model('Song');

//create a new song
exports.create = function (req, res){
    try {
        const song = new Song(req.body);
        song.save(function(err) {
            if (err) res.status(400).send(err);
            else res.json(song);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get all songs
exports.list = function (req, res){
    try {
        Song.find({}, function(err, songs) {
            if (err) throw err;
            else res.json(songs);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get a song by id
exports.read = function (req, res){
    try {
        Song.findById(req.parms.id, function(err, songs) {
            if (err) res.status(400).send(err);
            else res.json(songs);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};


//update song by id
exports.update = function (req, res){
    try {
        Song.findByIdAndUpdate(
            {
                _id: req.parms.id
            }, req
            .body, {
                new: true
            },
            function (err, song) {
                if(err) throw err;
                else res.json(song);
            });

    } catch(err) {
        res.status(500).send(err);
    }
};

//delete song by id
exports.delete = function (req, res){
    try {
        Song.remove({
            _id: req.parms.id
        }, function (err, song) {
            if (err) throw err;
            else res.json({
                message: 'song suprimer'
            });
        });
    } catch(err) {
        res.status(500).send(err);
    }
};





