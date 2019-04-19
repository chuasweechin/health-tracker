const helper = require('../helper');

module.exports = function(db) {
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

    let updateWeightLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {

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
                let result = await db.weight.getLatestWeight(data);
                data.weight = result;

                // reset the user weight in cookies and database
                response.cookie('current_weight', result);
                await db.user.updateUserWeight(data);

                response.redirect('/weight_log');
            } catch (e) {
                console.log("createWeightRequestHandler controller:" + e);
            }
        }
    };

    return {
        getWeightLogRequestHandler,
        createWeightLogRequestHandler,
        updateWeightLogRequestHandler,
        deleteWeightLogRequestHandler
    };
}