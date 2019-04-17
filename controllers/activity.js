const helper = require('../helper');

module.exports = function(db) {
    let newActivityLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            let result = await db.activities.getAllActivites();

            let data = {
                'name': request.cookies['name'],
                'gender': request.cookies['gender'],
                'age': request.cookies['age'],
                'weight': request.cookies['weight'],
                'height': request.cookies['height'],
                'activities': result
            }

            response.render('activity/add', data);
        }
    };

    let createActivityLogRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            let data = {
                'activity_id': request.body.activity,
                'count': request.body.count,
                'duration': request.body.duration,
                'calories_burnt': request.body.calories_burnt,
                'weight': request.cookies['weight'],
                'height': request.cookies['height'],
                'username': request.cookies['username']
            }

            let result = await db.activities.createActivityLog(data);

            response.redirect('/');
        }
    };

    return {
        newActivityLogRequestHandler,
        createActivityLogRequestHandler
    };
}