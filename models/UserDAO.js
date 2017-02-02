const db = require('./Database');
const charactersDAO = require('./CharactersDAO');

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
    },

    deleteUser: function(id) {
        return charactersDAO.deleteByUserId(id)
            .then((response) => {
                const query = "delete from users where id = $1";
                db.query(query, id)
                    .then((resp) => {
                        return resp;
                    })
                    .catch((error) => {
                        throw error;
                    });
            })
            .catch((error) => {
                throw error;
            });
    }

};
