const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser, deleteAllUsers } = require('../controllers/userController');


router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    .delete(deleteAllUsers)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports = router;


