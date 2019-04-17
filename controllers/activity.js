const helper = require('../helper');

module.exports = function(db) {
    let homeRequestHandler = async function(request, response) {
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

            response.render('home', data);
        }
    };

    return {
        homeRequestHandler,
    };
}