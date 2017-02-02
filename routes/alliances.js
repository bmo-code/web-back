var express = require('express');
var router = express.Router();

const AlliancesDAO = require('../models/AlliancesDAO');

router.get('/', function(req, res, next) {
    AlliancesDAO.getAll()
        .then((alliances) => {
            res.status(200).send(alliances);
        })
        .catch((error) => {
            return next(error);
        });
});

router.get('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    AlliancesDAO.getById(id)
        .then((alliance) => {
            res.status(200).send(alliance);
        })
        .catch((error) => {
            return next(error);
        });
});

router.post('/', function(req, res, next) {
    const name = req.body.name;

    AlliancesDAO.createAlliance(name)
        .then((alliance) => {
            res.status(200).send(alliance);
        })
        .catch((error) => {
            return next(error);
        });
});

router.delete('/:id', function(req, res, next) {
    const id = parseInt(req.params.id);
    AlliancesDAO.deleteAlliance(id)
        .then((resp) => {
            res.send(resp);
        })
        .catch((error) => {
            return next(error);
        });
});

module.exports = router;
