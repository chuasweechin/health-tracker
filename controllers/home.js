const helper = require('../helper');

module.exports = function(db) {
    let homeRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let activityResult = await db.activity.getActivityLog(request.cookies['username']);
                let weightResult = await db.weight.getAllWeight(request.cookies['username']);

                let data = {
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'weight': request.cookies['weight'],
                    'height': request.cookies['height'],
                    'activities': activityResult,
                    'weights': weightResult
                }

                response.render('home', data);

            } catch (e) {
                console.log("homeRequestHandler controller:" + e);
            }
        }
    };

    let statsRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let weightResult = await db.weight.getAllWeight(request.cookies['username']);

                let data = {
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'weight': request.cookies['weight'],
                    'height': request.cookies['height']
                }

                let processedData = helper.processDataForChart(weightResult, 'weight_in_kg', 'created_at');
                response.cookie('weightLog', JSON.stringify(processedData));
                response.render('statistics', data);

            } catch (e) {
                console.log("homeRequestHandler controller:" + e);
            }
        }
    };

    return {
        homeRequestHandler,
        statsRequestHandler
    };
}