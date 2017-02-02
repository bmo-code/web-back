const db = require('./Database');

module.exports = {

    getAll: function() {
        return db.query('SELECT * FROM users')
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    getById: function(id) {
        return db.query(
                'SELECT * FROM users WHERE id = $(userId)', {
                    userId: id
                })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }

};
