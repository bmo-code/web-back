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

module.exports = router;
