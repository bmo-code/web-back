/*var pgp = require('pg-promise')();

var config = {
    host: 'localhost',
    port: 5432,
    database: 'efrei',
    user: 'efrei',
    password: 'Jes@ispas001'
};

const DB = pgp(config);

module.exports = DB;*/

var pgp = require('pg-promise')();

var cn = {
    host: 'localhost',
    port: 5432,
    database: 'efrei',
    user: 'efrei',
    password: 'Jes@ispas001'
};

var db = pgp(cn);

module.exports = db;
