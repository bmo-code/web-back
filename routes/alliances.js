var express = require('express');
var router = express.Router();

const AlliancesDAO = require('../models/AlliancesDAO');

router.get('/', function(req, res, next) {
    AlliancesDAO.getAll()
        .then((alliances) => {
            res.status(200).send(alliances);
        });
});

router.get('/:id', function(req, res, next) {
    var id = parseInt(req.params.id);
    AlliancesDAO.getById(id)
        .then((alliance) => {
            res.status(200).send(alliance);
        });
});

module.exports = router;
