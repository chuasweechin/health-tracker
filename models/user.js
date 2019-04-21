const helper = require('../helper');

module.exports = function(dbPoolInstance) {

    let authenticate = async function(input) {
        try {
            const passwordHash = helper.hash(input.password)
            const values = [input.username, passwordHash];

            const sqlQuery = `SELECT *
                              FROM user_account
                              WHERE username= $1 AND password= $2`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('authenticate model: ' + e);
        }
    };

    let createUserAccount = async function(input) {
        try {
            const passwordHash = helper.hash(input.password)
            const values = [input.username, passwordHash, input.firstname, input.lastname,
                                input.gender, input.birthday, input.weight, input.height, helper.getCurrentDateTime()];

            const sqlQuery = `INSERT INTO user_account
                              (username, password, first_name, last_name, gender, birthday, weight_in_kg, height_in_cm, created_at)
                              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;

            await dbPoolInstance.query(sqlQuery, values);

            return true;

        } catch(e) {
            console.log('createAccount model: ' + e);
            return false;
        }
    };

    let updateUserWeight = async function(input) {
        try {
            const values = [input.weight, helper.getCurrentDateTime(), input.username];

            const sqlQuery = `UPDATE user_account
                              SET weight_in_kg = $1, updated_at = $2
                              WHERE username= $3`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('updateWeight model: ' + e);
        }
    };

  return {
    authenticate,
    createUserAccount,
    updateUserWeight
  };
};