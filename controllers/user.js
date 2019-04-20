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
            let result = await db.user.authenticate(request.body);

            if (result.length === 1) {
                response.cookie('username', result[0].username);
                response.cookie('name', `${ result[0].last_name } ${ result[0].first_name }`);
                response.cookie('gender', result[0].gender);
                response.cookie('age', helper.calculateAge(result[0].birthday));
                response.cookie('current_weight', result[0].weight_in_kg );
                response.cookie('current_height', result[0].height_in_cm );
                response.cookie('target_weight', result[0].target_weight );
                response.cookie('loggedIn', sha256(result[0].username + SALT));

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
            response.clearCookie('username', request.cookies['username']);
            response.clearCookie('name', request.cookies['name']);
            response.clearCookie('gender', request.cookies['gender']);
            response.clearCookie('age', request.cookies['age']);
            response.clearCookie('current_weight', request.cookies['current_weight']);
            response.clearCookie('current_height', request.cookies['current_height']);
            response.clearCookie('target_weight', request.cookies['target_weight']);
            response.clearCookie('weightLog', request.cookies['weightLog']);
            response.clearCookie('loggedIn', request.cookies['loggedIn']);
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