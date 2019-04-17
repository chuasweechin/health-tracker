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
            console.log('user controller ' + e);
        }
    };

    let authenticateRequestHandler = async function(request, response) {
        try {
            let result = await db.users.authenticate(request.body.username, request.body.password);

            if (result.length === 1) {
                response.cookie('username', result[0].username);
                response.cookie('name', `${ result[0].last_name } ${ result[0].first_name }`);
                response.cookie('gender', result[0].gender);
                response.cookie('age', helper.calculateAge(result[0].birthday));
                response.cookie('weight', result[0].weight_in_kg );
                response.cookie('height', result[0].height_in_cm );
                response.cookie('loggedIn', sha256(result[0].username + SALT));

                response.redirect('/');
            } else {
                response.send('Login Failure');
            }
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    let logoutRequestHandler = function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === true) {
            response.clearCookie('username', request.cookies['username']);
            response.clearCookie('name', request.cookies['name']);
            response.clearCookie('gender', request.cookies['gender']);
            response.clearCookie('age', request.cookies['age']);
            response.clearCookie('weight', request.cookies['weight']);
            response.clearCookie('height', request.cookies['height']);
            response.clearCookie('loggedIn', request.cookies['loggedIn']);
        }

        response.redirect('/login');
    };

    let registerRequestHandler = async function(request, response) {
        try {
            response.render('user/register');
        } catch(e) {
            console.log('user controller ' + e);
        }
    };

    let createAccountRequestHandler = async function(request, response) {
        try {
            let success = await db.users.createAccount(request.body.username, request.body.password);

            if (success === true) {
                response.redirect('/login');
            } else {
                response.send('Username already exist!');
            }
        } catch(e) {
            console.log('user controller ' + e);
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