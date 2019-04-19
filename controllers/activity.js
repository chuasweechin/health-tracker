const helper = require('../helper');

module.exports = function(db) {
    let getActivityLogRequestHandler = async function(request, response) {
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

                data.activities = await db.activity.getActivityLog(data);

                response.render('activity_log/view', data);

            } catch (e) {
                console.log("newActivityLogRequestHandler controller:" + e);
            }
        }
    };

    let newActivityLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let result = await db.activity.getAllActivites();

                let data = {
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'current_weight': request.cookies['current_weight'],
                    'current_height': request.cookies['current_height'],
                    'activities': result
                }

                response.render('activity_log/add', data);

            } catch (e) {
                console.log("newActivityLogRequestHandler controller:" + e);
            }
        }
    };

    let createActivityLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'activity_id': request.body.activity,
                    'count': request.body.count,
                    'duration': request.body.duration,
                    'calories_burnt': request.body.calories_burnt,
                    'current_weight': request.cookies['current_weight'],
                    'current_height': request.cookies['current_height'],
                    'username': request.cookies['username']
                }

                console.log(request.body);

                //let result = await db.activity.createActivityLog(data);

                response.redirect('/');
            } catch (e) {
                console.log("createActivityLogRequestHandler controller:" + e);
            }

        }
    };

    return {
        getActivityLogRequestHandler,
        newActivityLogRequestHandler,
        createActivityLogRequestHandler
    };
}