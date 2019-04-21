const helper = require('../helper');

module.exports = function(dbPoolInstance) {

    let addGoal = async function(input) {
        try {
            const values = [input.target_weight, input.target_date, input.username];

            const sqlQuery = `UPDATE user_account
                              SET target_weight = $1, target_date = $2
                              WHERE username= $3 RETURNING target_weight, target_date`;

            let result = await dbPoolInstance.query(sqlQuery, values);


            return result.rows[0];

        } catch(e) {
            console.log('addGoal model: ' + e);
        }
    };

  return {
    addGoal
  };
};