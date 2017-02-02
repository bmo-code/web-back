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
    },

    createCharacter: function(name, character_class, user_id, position) {
        const query = "insert into characters(name, class, user_id, position) values(${name}, ${class}, ${user_id}, ${position}) RETURNING*";
        return db.query(query, {
                name: name,
                class: character_class,
                user_id: user_id,
                position: position
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            });
    },

    deleteCharacter: function(id) {
        const query = "delete from characters where id = $(charactersId)";
        return db.query(query, {
                charactersId: id
            })
            .then((resp) => {
                return resp;
            })
            .catch((error) => {
                throw error;
            });
    }

};
