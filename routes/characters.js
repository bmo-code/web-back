var express = require('express');
var router = express.Router();

const CharacterDAO = require('../models/CharactersDAO');

router.get('/', function(req, res, next) {
    CharacterDAO.getAll()
        .then((users) => {
            res.send(users);
        });
});

router.get('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    CharacterDAO.getById(id)
        .then((user) => {
            res.send(user);
        });
})

module.exports = router;
