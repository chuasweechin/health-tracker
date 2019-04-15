module.exports = function (app, allModels) {
    const userController = require('./user')(allModels);

    app.get('/', userController.hello);

    app.get('/login', userController.loginRequestHandler);
    app.post('/login', userController.authenticateRequestHandler);

    app.get('/logout', userController.logoutRequestHandler);

    app.get('/register', userController.registerRequestHandler);
    app.post('/register', userController.createAccountRequestHandler);
};