/**
 * Created by Quentin on 02/02/2017.
 */
var pgp = require('pg-promise')();

var config = {
    host: 'localhost',
    port: 5432,
    database: 'efrei',
    user:'efrei',
    password: ''
};

const DB = pgp(config);

module.exports = DB;
