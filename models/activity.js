module.exports = function(dbPoolInstance) {

    let getAllActivites = async function() {
        try {
            const sqlQuery = `SELECT * FROM activity`;
            let result = await dbPoolInstance.query(sqlQuery);

            return result.rows;

        } catch(e) {
            console.log('authenticate model: ' + e);
        }
    };

  return {
    getAllActivites
  };
};