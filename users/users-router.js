const express = require('express');

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js')
const router = express.Router();




router.get('/', restricted, (req, res) => {
    Users.getUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({errorMessage: "Database failed to get users. Contact your backend"})
    })
 });



router.get('/:user_id', (req, res) => {
    const {user_id} = req.params;

    Users.findUserById(user_id)
    .then(user => {
        if (user) {
            res.json(user)
        } else {
            res.status(404).json({message: 'There is no user with that user_id'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Failed to get user. Contact your backend'})
    })
});



router.put('/:user_id', (req, res) => {
    const {user_id} = req.params;
    const changes = req.body;

    Users.findUserById(user_id)
    .then(user => {
        if (user) {
            Users.updateUser(changes, user_id)
            .then(updatedUser => {
                res.json(updatedUser);
            })
        } else {
            res.status(404).json({message: "No user with that user_id exists"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to update user. Contact your backend"})
    })
});



router.delete('/:user_id', (req, res) => {
    const {user_id} = req.params;

    Users.removeUser(user_id)
    .then(deleted => {
        if (deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: 'No user with that user_id exists'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to delete user. Contact your backend"})
    })
});

 



module.exports = router;