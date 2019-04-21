const helper = require('../helper');

module.exports = function(db) {

    let getCalorieIntakeDatasetRequestHandler = async function(request, response) {
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

            } catch (e) {
                console.log("getCalorieIntakeDatasetRequestHandler controller:" + e);
            }
        }
    };

    let getCalorieIntakeRequestHandler = async function(request, response) {
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

                data.calorie = await db.calorie.getAllCalorieIntake(data);

                response.render('calorie_intake/view', data);
            } catch (e) {
                console.log("getCalorieIntakeRequestHandler controller:" + e);
            }
        }
    };

    let createCalorieIntakeRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'weight': request.body.weight,
                    'username': request.cookies['username']
                }

                let result = await db.calorie.addCalorieIntake(data);

                response.redirect('/calorie_intake');
            } catch (e) {
                console.log("createCalorieIntakeRequestHandler controller:" + e);
            }
        }
    };

    let deleteCalorieIntakeRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'username': request.cookies['username'],
                    'weight_log_id': request.body.weight_log_id
                }

                await db.calorie.deleteCalorieIntake(data);

                response.redirect('/calorie_intake');
            } catch (e) {
                console.log("deleteCalorieIntakeRequestHandler controller:" + e);
            }
        }
    };

    return {
        getCalorieIntakeDatasetRequestHandler,
        getCalorieIntakeRequestHandler,
        createCalorieIntakeRequestHandler,
        deleteCalorieIntakeRequestHandler
    };
}