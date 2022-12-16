const mongoose = require('mongoose');
const PlayList = mongoose.model('PlayList');

//create a new PlayList
exports.create = function (req, res){
    try {
        const playlist = new PlayList(req.body);
        playlist.save(function(err) {
            if (err) res.status(400).send(err);
            else res.json(playlist);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get all PlayLists
exports.list = function (req, res){
    try {
        playlist.find({}, function(err, playlists) {
            if (err) throw err;
            else res.json(playlists);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get a playlist by id
exports.read = function (req, res){
    try {
        playlist.findById(req.parms.id, function(err, playlists) {
            if (err) res.status(400).send(err);
            else res.json(playlists);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};


//update playlist by id
exports.update = function (req, res){
    try {
        PlayList.findByIdAndUpdate(
            {
                _id: req.parms.id
            }, req
            .body, {
                new: true
            },
            function (err, playlist) {
                if(err) throw err;
                else res.json(playlist);
            });

    } catch(err) {
        res.status(500).send(err);
    }
};

//delete playlist by id
exports.delete = function (req, res){
    try {
        PlayList.remove({
            _id: req.parms.id
        }, function (err, playlist) {
            if (err) throw err;
            else res.json({
                message: 'playlist suprimer'
            });
        });
    } catch(err) {
        res.status(500).send(err);
    }
};





