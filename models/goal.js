const helper = require('../helper');

module.exports = function(dbPoolInstance) {

    let addGoal = async function(input) {
        try {
            const values = [input.target_weight, input.username];

            const sqlQuery = `UPDATE user_account
                              SET target_weight = $1
                              WHERE username= $2 RETURNING target_weight`;

            let result = await dbPoolInstance.query(sqlQuery, values);
            console.log(result.rows[0].target_weight);
            return result.rows[0].target_weight;

        } catch(e) {
            console.log('addGoal model: ' + e);
        }
    };

  return {
    addGoal
  };
};