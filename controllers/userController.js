const mongoose = require('mongoose');
const User = mongoose.model('User');

//create a new user
exports.create = function (req, res){
    try {
        const user = new User(req.body);
        user.save(function(err) {
            if (err) res.status(400).send(err);
            else res.json(user);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get all users
exports.list = function (req, res){
    try {
        User.find({}, function(err, users) {
            if (err) throw err;
            else res.json(users);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};

//get a user by id
exports.read = function (req, res){
    try {
        User.findById(req.parms.id, function(err, users) {
            if (err) res.status(400).send(err);
            else res.json(users);
        });
    } catch(err) {
        res.status(500).send(err);
    }
};


//update user by id
exports.update = function (req, res){
    try {
        User.findByIdAndUpdate(
            {
                _id: req.parms.id
            }, req
            .body, {
                new: true
            },
            function (err, user) {
                if(err) throw err;
                else res.json(user);
            });

    } catch(err) {
        res.status(500).send(err);
    }
};

//delete user by id
exports.delete = function (req, res){
    try {
        User.remove({
            _id: req.parms.id
        }, function (err, user) {
            if (err) throw err;
            else res.json({
                message: 'utilisateur suprimer'
            });
        });
    } catch(err) {
        res.status(500).send(err);
    }
};





