const helper = require('../helper');

module.exports = function(db) {
    let getDatasetRequestHandler = async function(request, response) {
        if (helper.checkCookieForLogin(request.cookies) === false) {
            response.render('user/login');
        } else {
            try {
                let data = {
                    'username': request.cookies['username'],
                    'name': request.cookies['name'],
                    'gender': request.cookies['gender'],
                    'age': request.cookies['age'],
                    'current_weight': request.cookies['current_weight'],
                    'starting_weight': request.cookies['starting_weight'],
                    'starting_date': request.cookies['starting_date'],
                    'target_weight': request.cookies['target_weight'],
                    'target_date': request.cookies['target_date'],
                    'current_height': request.cookies['current_height']
                }

                let weightResult = await db.weight.getWeightDataset(data);
                let calorieResult = await db.calorie.getCalorieIntakeDataset(data);

                let processedWeightDataset = helper.processDataForChart(weightResult, 'created_at', 'weight_in_kg');
                let processedCalorieDataset = helper.processDataForChart(calorieResult, 'created_at', 'calorie_sum');

                response.cookie('weightLog', JSON.stringify(processedWeightDataset));
                response.cookie('calorieLog', JSON.stringify(processedCalorieDataset));
                response.render('chart/view', data);

            } catch (e) {
                console.log("getDatasetRequestHandler controller:" + e);
            }
        }
    };

    return {
        getDatasetRequestHandler
    };
}