var express = require('express');
var router = express.Router();

const UserDAO = require('../models/UserDAO');

/*
 |--------------------------------------------------------------------------
 | GET /users
 | Get the list of all users
 |--------------------------------------------------------------------------
 */
router.get('/', function(req, res, next) {
    UserDAO.getAll()
        .then((users) => {
            res.send({
                'users': users
            });
        })
        .catch((error) => {
            return next(error);
        });
});

/*
 |--------------------------------------------------------------------------
 | GET /users/:id
 | Get a specific user
 |--------------------------------------------------------------------------
 */
router.get('/:id', function(req, res, next) {
    UserDAO.getById(req.params.id)
        .then((user) => {
            res.send({
                'user': user[0]
            });
        })
        .catch((error) => {
            return next(error);
        });
});

/*
 |--------------------------------------------------------------------------
 | POST /users
 | Create a new user
 |--------------------------------------------------------------------------
 */
router.post('/', function(req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const alliance_id = req.body.alliance_id;

    UserDAO.createUser(name, email, alliance_id)
        .then((user) => {
            res.send({
                'user': user[0]
            });
        })
        .catch((error) => {
            return next(error);
        });
});

/*
 |--------------------------------------------------------------------------
 | DELETE /users/:id
 | Delete a specific user
 |--------------------------------------------------------------------------
 */
router.delete('/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    UserDAO.deleteUser(id)
        .then((resp) => {
            res.send(resp);
        })
        .catch((error) => {
            return next(error);
        });
});

module.exports = router;
