const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//creation User
router.post('/', UserController.create);

//get all User
router.get('/', UserController.list);

//get user by id
router.get('/:id', UserController.read);

//update user
router.put('/:id', UserController.update);

//delete User
router.delete('/:id', UserController.delete);

module.exports = router;
