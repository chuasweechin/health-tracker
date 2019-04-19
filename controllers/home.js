const helper = require('../helper');

module.exports = function(db) {
    let homeRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'username': request.cookies['username'],
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'current_weight': request.cookies['current_weight'],
                    'current_height': request.cookies['current_height']
                }

                let weightResult = await db.weight.getAllWeight(data);

                let processedData = helper.processDataForChart(weightResult, 'created_at', 'weight_in_kg');
                response.cookie('weightLog', JSON.stringify(processedData));
                response.render('home', data);

            } catch (e) {
                console.log("homeRequestHandler controller:" + e);
            }
        }
    };

    return {
        homeRequestHandler
    };
}