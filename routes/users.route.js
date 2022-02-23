const express = require('express');
const { AddUser, FindAllUsers, FindSinglUser, UpdateUser, DeleteUser } = require('../controllers/users.controller');
const router = express.Router()


/* add user */
router.post('/users', AddUser)

/* find all users */
router.get('/users', FindAllUsers)

/* find single user */
router.get('/users/:id', FindSinglUser)

/* add user */
router.put('/users/:id', UpdateUser)

/* add user */
router.delete('/users/:id', DeleteUser)

module.exports = router;