module.exports = function (app, allModels) {
    const userController = require('./user')(allModels);
    const activityController = require('./activity')(allModels);

    app.get('/', activityController.homeRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);
};