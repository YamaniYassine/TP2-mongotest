const express = require('express');
const router = express.Router();
const SongController = require('../controllers/songController');

//creation Song
router.post('/', SongController.create);

//get all Song
router.get('/', SongController.list);

//get Song by id
router.get('/:id', SongController.read);

//update Song
router.put('/:id', SongController.update);

//delete Song
router.delete('/:id', SongController.delete);

module.exports = router;
