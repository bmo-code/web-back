const db = require('./Database');

module.exports = {

    getAll: function() {
        return db.query('select * from alliances')
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    getById: function(id) {
        const query = "select * from alliances where id = $(allianceId)";
        return db.query(
                query, {
                    allianceId: id
                })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    }

};
