const helper = require('../helper');

module.exports = function(db) {
    let newWeightRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'weight': request.cookies['weight'],
                    'height': request.cookies['height']
                }

                response.render('weight/add', data);
            } catch (e) {
                console.log("newWeightRequestHandler controller:" + e);
            }
        }
    };

    let createWeightRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'weight': request.body.weight,
                    'username': request.cookies['username']
                }

                let result = await db.weight.addWeight(data);
                response.cookie('weight', result);

                await await db.user.updateUserWeight(data);

                response.redirect('/');
            } catch (e) {
                console.log("createWeightRequestHandler controller:" + e);
            }
        }
    };

    return {
        newWeightRequestHandler,
        createWeightRequestHandler
    };
}