module.exports = function (app, allModels) {
    const homeController = require('./controllers/home')(allModels);
    const userController = require('./controllers/user')(allModels);
    const goalController = require('./controllers/goal')(allModels);
    const weightController = require('./controllers/weight')(allModels);

    app.get('/', homeController.homeRequestHandler);
    app.get('/stats', weightController.getWeightDatasetRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);
    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);

    app.get('/weight_log', weightController.getWeightLogRequestHandler);
    app.post('/weight_log', weightController.createWeightLogRequestHandler);
    app.delete('/weight_log', weightController.deleteWeightLogRequestHandler);

    app.get('/goal', goalController.goalRequestHandler);
    app.post('/goal', goalController.addGoalRequestHandler);
};