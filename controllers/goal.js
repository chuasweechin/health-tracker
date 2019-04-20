const helper = require('../helper');

module.exports = function(db) {

    let goalRequestHandler = function (request, response) {
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
                    'target_weight': request.cookies['target_weight']
                }

                response.render('goal/add', data);

            } catch (e) {
                console.log("goalRequestHandler controller:" + e);
            }
        }
    };

    let addGoalRequestHandler = async function (request, response) {
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
                    'target_weight': request.body.target
                }

                let result = await db.goal.addGoal(data);

                response.cookie('target_weight', result);
                response.render('goal/add', data);

            } catch (e) {
                console.log("addGoalRequestHandler controller:" + e);
            }
        }
    };

    return {
        goalRequestHandler,
        addGoalRequestHandler
    };
}