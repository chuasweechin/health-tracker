const helper = require('../helper');

module.exports = function(dbPoolInstance) {
    let getAllActivites = async function() {
        try {
            const sqlQuery = `SELECT * FROM activity`;
            let result = await dbPoolInstance.query(sqlQuery);

            return result.rows;

        } catch(e) {
            console.log('getAllActivites model: ' + e);
        }
    };

    let getActivityLog = async function(input) {
        try {
            const values = [input];
            const sqlQuery = `SELECT ual.*, a.name FROM user_activity_log ual
                              INNER JOIN activity a ON (ual.fk_activity_id = a.id)
                              WHERE ual.fk_user_account_username = $1`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('getActivityLog model: ' + e);
        }
    };

    let createActivityLog = async function(input) {
        try {
            const values = [input.username, input.activity_id, input.count, input.duration,
                                input.weight, input.height, input.calories_burnt, helper.getCurrentDateTime()];

            const sqlQuery = `INSERT INTO user_activity_log
                              (fk_user_account_username, fk_activity_id, activity_count, duration_in_second, current_weight_in_kg, current_height_in_cm, kcal_burnt, created_at)
                              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('createActivityLog model: ' + e);
        }
    };

  return {
    getAllActivites,
    getActivityLog,
    createActivityLog
  };
};