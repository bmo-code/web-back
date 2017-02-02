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
        return db.query('SELECT * FROM users WHERE id = $(userId)', {
                userId: id
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    createUser: function(name, email, alliance_id) {
        const query = "insert into users(name, email, alliance_id) values(${name}, ${email}, ${alliance_id}) RETURNING*";
        return db.query(query, {
                name: name,
                email: email,
                alliance_id: alliance_id
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    deleteUser: function(id) {
        const query = "delete from users where id = $(userId)";
        return db.query(query, {
                userId: id
            })
            .then((resp) => {
                return resp;
            })
            .catch((error) => {
                throw error;
            });
    }

};
