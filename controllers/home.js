const helper = require('../helper');

module.exports = function(db) {

    let homeRequestHandler = function (request, response) {
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