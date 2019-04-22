module.exports = function (app, allModels) {
    const userController = require('./controllers/user')(allModels);
    const goalController = require('./controllers/goal')(allModels);
    const chartController = require('./controllers/chart')(allModels);
    const weightController = require('./controllers/weight')(allModels);
    const calorieController = require('./controllers/calorie')(allModels);

    app.get('/goal', goalController.goalRequestHandler);
    app.post('/goal', goalController.addGoalRequestHandler);

    app.get('/', chartController.getDatasetRequestHandler);
    app.get('/stats', chartController.getDatasetRequestHandler);

    app.get('/calorie_intake', calorieController.getCalorieIntakeRequestHandler);
    app.post('/calorie_intake', calorieController.createCalorieIntakeRequestHandler);
    app.delete('/calorie_intake', calorieController.deleteCalorieIntakeRequestHandler);

    app.get('/weight_log', weightController.getWeightLogRequestHandler);
    app.post('/weight_log', weightController.createWeightLogRequestHandler);
    app.delete('/weight_log', weightController.deleteWeightLogRequestHandler);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);
    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);
};