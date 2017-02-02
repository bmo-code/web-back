var express = require('express');
var router = express.Router();

const CharacterDAO = require('../models/CharactersDAO');

router.get('/', function(req, res, next) {
    CharacterDAO.getAll()
        .then((users) => {
            res.send(users);
        })
        .catch((error) => {
            return next(error);
        });
});

router.get('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    CharacterDAO.getById(id)
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            return next(error);
        });
});

router.post('/', function(req, res, next) {
    const name = req.body.name;
    const character_class = req.body.character_class;
    const user_id = req.body.user_id;
    const point = req.body.point;

    CharacterDAO.createCharacter(name, character_class, user_id, point)
        .then((user) => {
            res.send(user);
        })
        .catch((error) => {
            return next(error);
        });
});

router.delete('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    CharacterDAO.deleteCharacter(id)
        .then((resp) => {
            res.send(resp);
        })
        .catch((error) => {
            return next(error);
        });
});

module.exports = router;
