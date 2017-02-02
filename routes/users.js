var express = require('express');
var router = express.Router();

const UserDAO = require('../models/UserDAO');

router.get('/', function(req, res, next) {
    UserDAO.getAll()
        .then((users) => {
            res.send(users);
        });
});

router.get('/:id', function(req, res, next) {
    UserDAO.getById(req.params.id)
        .then((user) => {
            res.send(user);
        });
});

router.delete('/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    UserDAO.deleteUser(id)
        .then((resp) => {
            res.send(resp);
        });
});

module.exports = router;
