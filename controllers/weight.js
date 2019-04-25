const helper = require('../helper');

module.exports = function(db) {
    let getWeightDatasetRequestHandler = async function(request, response) {
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
                response.render('weight_log/stats', data);

            } catch (e) {
                console.log("homeRequestHandler controller:" + e);
            }
        }
    };

    let getWeightLogRequestHandler = async function(request, response) {
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
                    'current_height': request.cookies['current_height'],
                }

                data.weights = await db.weight.getAllWeight(data);

                response.render('weight_log/view', data);
            } catch (e) {
                console.log("getWeightLogRequestHandler controller:" + e);
            }
        }
    };

    let createWeightLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'weight': request.body.weight,
                    'username': request.cookies['username']
                }

                let result = await db.weight.addWeight(data);
                response.cookie('current_weight', result);

                await db.user.updateUserWeight(data);

                response.redirect('/weight_log');
            } catch (e) {
                console.log("createWeightRequestHandler controller:" + e);
            }
        }
    };

    let deleteWeightLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'username': request.cookies['username'],
                    'weight_log_id': request.body.weight_log_id
                }

                await db.weight.deleteWeight(data);

                // get the latest weight after deletion in case the latest weight has been deleted
                let latestWeightResult = await db.weight.getLatestWeight(data);
                data.weight = latestWeightResult;

                // reset the user weight in cookies and database
                response.cookie('current_weight', latestWeightResult);
                await db.user.updateUserWeight(data);

                // reset user cookie to reflect starting weight in case it has been deleted
                let startingWeightresult = await db.weight.getStartingWeight(data);

                response.cookie('starting_weight', startingWeightresult[0].weight_in_kg );
                response.cookie('starting_date', helper.formatDate(startingWeightresult[0].created_at) );

                response.redirect('/weight_log');
            } catch (e) {
                console.log("createWeightRequestHandler controller:" + e);
            }
        }
    };

    return {
        getWeightDatasetRequestHandler,
        getWeightLogRequestHandler,
        createWeightLogRequestHandler,
        deleteWeightLogRequestHandler
    };
}