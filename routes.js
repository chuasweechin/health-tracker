module.exports = function (app, allModels) {
    const homeController = require('./controllers/home')(allModels);
    const userController = require('./controllers/user')(allModels);
    const weightController = require('./controllers/weight')(allModels);
    const activityController = require('./controllers/activity')(allModels);

    app.get('/', homeController.homeRequestHandler);
    app.get('/stats', homeController.homeRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);

    app.get('/activity_log', activityController.getActivityLogRequestHandler);
    app.get('/activity_log/new', activityController.newActivityLogRequestHandler);
    app.post('/activity_log', activityController.createActivityLogRequestHandler);

    app.get('/weight_log', weightController.getWeightLogRequestHandler);
    app.put('/weight_log', weightController.updateWeightLogRequestHandler);
    app.post('/weight_log', weightController.createWeightLogRequestHandler);
    app.delete('/weight_log', weightController.deleteWeightLogRequestHandler);
};