const express = require('express');
const router = express.Router();
const PlaylistController = require('../controllers/playlistController');

//creation Playlist
router.post('/', PlaylistController.create);

//get all Playlist
router.get('/', PlaylistController.list);

//get Playlist by id
router.get('/:id', PlaylistController.read);

//update Playlist
router.put('/:id', PlaylistController.update);

//delete Playlist
router.delete('/:id', PlaylistController.delete);

module.exports = router;
