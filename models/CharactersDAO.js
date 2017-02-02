const db = require('./Database');

module.exports = {

    getAll: function() {
        return db.query('select * from characters')
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    getById: function(id) {
        const query = "select * from characters where id = $(characterId)";
        return db.query(
                query, {
                    characterId: id
                })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }

};
