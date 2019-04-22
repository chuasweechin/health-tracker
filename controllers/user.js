const SALT = '9UYS*u7y^@hgs';
const helper = require('../helper');
const sha256 = require('js-sha256');

module.exports = function(db) {
    let loginRequestHandler = async function(request, response) {
        try {
            if (helper.checkCookieForLogin(request.cookies) === false) {
                response.render('user/login');
            } else {
                response.redirect('/');
            }
        } catch(e) {
            console.log('loginRequestHandler controller ' + e);
        }
    };

    let authenticateRequestHandler = async function(request, response) {
        try {
            let userResult = await db.user.authenticate(request.body);
            let weightResult = await db.weight.getStartingWeight(request.body);

            if (userResult.length === 1) {
                response.cookie('name', `${ userResult[0].last_name } ${ userResult[0].first_name }`);
                response.cookie('gender', userResult[0].gender);
                response.cookie('age', helper.calculateAge(userResult[0].birthday));
                response.cookie('current_weight', userResult[0].weight_in_kg );
                response.cookie('current_height', userResult[0].height_in_cm );
                response.cookie('starting_weight', weightResult[0].weight_in_kg );
                response.cookie('starting_date', helper.formatDate(weightResult[0].created_at) );
                response.cookie('target_weight', userResult[0].target_weight );
                response.cookie('target_date', helper.formatDate(userResult[0].target_date) );
                response.cookie('username', userResult[0].username);
                response.cookie('loggedIn', sha256(userResult[0].username + SALT));
                response.cookie('username', userResult[0].username);
                response.cookie('dailyCalorieNeeds', userResult[0].weight_in_kg * 0.9 * 24 * 1 * 1.3);

                response.redirect('/');
            } else {
                response.send('Login Failure');
            }
        } catch(e) {
            console.log('authenticateRequestHandler controller ' + e);
        }
    };

    let logoutRequestHandler = function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === true) {
            response.clearCookie('name', request.cookies['name']);
            response.clearCookie('gender', request.cookies['gender']);
            response.clearCookie('age', request.cookies['age']);
            response.clearCookie('current_weight', request.cookies['current_weight']);
            response.clearCookie('current_height', request.cookies['current_height']);
            response.clearCookie('starting_weight', request.cookies['starting_weight']);
            response.clearCookie('starting_date', request.cookies['starting_date']);
            response.clearCookie('target_weight', request.cookies['target_weight']);
            response.clearCookie('target_date', request.cookies['target_date'] );
            response.clearCookie('weightLog', request.cookies['weightLog']);
            response.clearCookie('loggedIn', request.cookies['loggedIn']);
            response.clearCookie('username', request.cookies['username']);
            response.clearCookie('dailyCalorieNeeds', request.cookies['dailyCalorieNeeds']);
        }

        response.redirect('/login');
    };

    let registerRequestHandler = async function(request, response) {
        try {
            response.render('user/register');
        } catch(e) {
            console.log('logoutRequestHandler controller ' + e);
        }
    };

    let createAccountRequestHandler = async function(request, response) {
        try {
            let success = await db.user.createUserAccount(request.body);

            if (success === true) {
                // update weight log when account is initially created
                await db.weight.addWeight(request.body);

                response.redirect('/login');
            } else {
                response.send('Username already exist!');
            }
        } catch(e) {
            console.log('createAccountRequestHandler controller ' + e);
        }
    };

    return {
        loginRequestHandler,
        authenticateRequestHandler,
        logoutRequestHandler,
        registerRequestHandler,
        createAccountRequestHandler
    };
}