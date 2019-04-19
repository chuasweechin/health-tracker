const helper = require('../helper');

module.exports = function(dbPoolInstance) {
    let getAllWeight = async function(input) {
        try {
            const values = [input.username];
            const sqlQuery = `SELECT * FROM user_weight_log
                              WHERE fk_user_account_username = $1
                              ORDER BY created_at DESC`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('getAllWeight model: ' + e);
        }
    };

    let getLatestWeight = async function(input) {
        try {
            const values = [input.username];
            const sqlQuery = `SELECT weight_in_kg from user_weight_log
                              WHERE fk_user_account_username = $1
                              ORDER BY created_at DESC limit 1`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows[0].weight_in_kg;

        } catch(e) {
            console.log('getLatestWeight model: ' + e);
        }
    };

    let addWeight = async function(input) {
        try {
            const values = [input.username, input.weight, helper.getCurrentDateTime()];

            const sqlQuery = `INSERT INTO user_weight_log
                              (fk_user_account_username, weight_in_kg, created_at)
                              VALUES ($1, $2, $3) RETURNING weight_in_kg`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows[0].weight_in_kg;

        } catch(e) {
            console.log('addWeight model: ' + e);
        }
    };

    let updateWeight = async function(input) {
        try {

        } catch(e) {
            console.log('addWeight model: ' + e);
        }
    };

    let deleteWeight = async function(input) {
        try {
            const values = [input.username, input.weight_log_id];

            const sqlQuery = `DELETE FROM user_weight_log
                              WHERE fk_user_account_username = $1 AND id = $2`;

            await dbPoolInstance.query(sqlQuery, values);

        } catch(e) {
            console.log('deleteWeight model: ' + e);
        }
    };

  return {
    getAllWeight,
    getLatestWeight,
    addWeight,
    updateWeight,
    deleteWeight
  };
};