module.exports = function (app, allModels) {
    const homeController = require('./controllers/home')(allModels);
    const userController = require('./controllers/user')(allModels);
    const weightController = require('./controllers/weight')(allModels);
    const activityController = require('./controllers/activity')(allModels);

    app.get('/', homeController.homeRequestHandler);
    app.get('/stats', homeController.statsRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);

    app.get('/activity_log/new', activityController.newActivityLogRequestHandler);
    app.post('/activity_log', activityController.createActivityLogRequestHandler);

    app.get('/weight_log/new', weightController.newWeightRequestHandler);
    app.post('/weight_log', weightController.createWeightRequestHandler);
};