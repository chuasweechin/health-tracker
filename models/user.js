const SALT = '9UYS*u7y^@hgs';
const sha256 = require('js-sha256');
const helper = require('../helper');

module.exports = function(dbPoolInstance) {

    let authenticate = async function(username, password) {
        try {
            const passwordHash = sha256(password + SALT);

            const values = [username, passwordHash];
            const sqlQuery = `SELECT username, last_name, first_name, gender, weight_in_kg, height_in_cm, birthday
                              FROM user_account
                              WHERE username= $1 AND password= $2`;

            let result = await dbPoolInstance.query(sqlQuery, values);

            return result.rows;

        } catch(e) {
            console.log('authenticate model: ' + e);
        }
    };

    let createAccount = async function(username, password) {
        try {
            const passwordHash = sha256(password + SALT);

            const values = [username, passwordHash, Date.now()];
            const sqlQuery = `INSERT INTO user_account (username, password, created_at)
                              VALUES ($1, $2, $3) RETURNING *`;

            await dbPoolInstance.query(sqlQuery, values);

            return true;

        } catch(e) {
            console.log('createAccount model: ' + e);
            return false;
        }
    };

  return {
    authenticate,
    createAccount
  };
};