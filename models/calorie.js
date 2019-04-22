const helper = require('../helper');

module.exports = function(dbPoolInstance) {
    let getCalorieIntakeDataset = async function(input) {
        try {
            const values = [input.username];
            const sqlQuery = `SELECT SUM(calorie) AS calorie_sum, created_at FROM user_calorie_intake
                              WHERE fk_user_account_username = $1
                              GROUP BY created_at
                              ORDER BY created_at DESC`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('getAllCalorieIntake model: ' + e);
        }
    };

    let getAllCalorieIntake = async function(input) {
        try {
            const values = [input.username];
            const sqlQuery = `SELECT * FROM user_calorie_intake
                              WHERE fk_user_account_username = $1
                              ORDER BY created_at DESC`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('getAllCalorieIntake model: ' + e);
        }
    };

    let addCalorieIntake = async function(input) {
        try {
            const values = [input.username, input.calorie, input.description, input.date];

            const sqlQuery = `INSERT INTO user_calorie_intake
                              (fk_user_account_username, calorie, description, created_at)
                              VALUES ($1, $2, $3, $4)`;

            await dbPoolInstance.query(sqlQuery, values);

        } catch(e) {
            console.log('addCalorieIntake model: ' + e);
        }
    };

    let deleteCalorieIntake = async function(input) {
        try {
            const values = [input.username, input.calorie_intake_id];

            const sqlQuery = `DELETE FROM user_calorie_intake
                              WHERE fk_user_account_username = $1 AND id = $2`;

            await dbPoolInstance.query(sqlQuery, values);

        } catch(e) {
            console.log('deleteCalorieIntake model: ' + e);
        }
    };

  return {
    getCalorieIntakeDataset,
    getAllCalorieIntake,
    addCalorieIntake,
    deleteCalorieIntake
  };
};