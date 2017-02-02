/**
 * Created by Quentin on 02/02/2017.
 */
const DB = require('Database');

module.exports = {
    getAll() {
        return DB.query('SELECT * FROM users')
            .then((result) => {
            return result;
            })
    }
}