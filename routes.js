module.exports = function (app, allModels) {
    const homeController = require('./controllers/home')(allModels);
    const userController = require('./controllers/user')(allModels);
    const activityController = require('./controllers/activity')(allModels);

    app.get('/', homeController.homeRequestHandler);
    app.get('/activity_log/new', activityController.newActivityLogRequestHandler);
    app.post('/activity_log', activityController.createActivityLogRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);
};