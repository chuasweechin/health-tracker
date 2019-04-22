window.onload = function() {
    let startingWeight = Number(JSON.parse(getCookie('starting_weight')));
    let currentWeight = Number(JSON.parse(getCookie('current_weight')));
    let targetWeight = Number(JSON.parse(getCookie('target_weight')));

    let weightCtx = document.getElementById('weightChart').getContext('2d');
    let weightDataset = JSON.parse(getCookie('weightLog'));

    let weightChart = new Chart(weightCtx, {
        type: 'line',
        data: {
            labels: weightDataset.xAxis,
            datasets: [{
                label: 'Weight',
                lineTension: 0.1,
                borderColor: "rgb(75, 192, 192)",
                data: weightDataset.yAxis
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return moment(value).format("DD-MMM-YY");
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        min : 0,
                        max : Math.ceil((Number(targetWeight) + 100)  /100) * 100,
                        stepSize: 50,
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return value + ' kg';
                        }
                    }
                }]
            },
            annotation: {
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: targetWeight,
                borderColor: '#FF6383',
                borderWidth: 1.0,
                label: {
                  xAdjust: 0,
                  yAdjust: 15,
                  enabled: true,
                  position: "right",
                  fontStyle: "none",
                  content: `Target Weight: ${ targetWeight } kg`,
                  backgroundColor: '#FF6383'
                }
              }]
            }
        }
    });


    let calorieCtx = document.getElementById('calorieChart').getContext('2d');
    let calorieDataset = JSON.parse(getCookie('calorieLog'));
    let dailyCalorieNeeds = JSON.parse(getCookie('dailyCalorieNeeds'));

    let calorieChart = new Chart(calorieCtx, {
        type: 'bar',
        data: {
            labels: calorieDataset.xAxis,
            datasets: [{
                label: 'Calorie Intake',
                data: calorieDataset.yAxis,
                borderColor: "rgb(255, 206, 78)",
                backgroundColor: "rgb(255, 206, 78, 0.4)"
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        callback: function(value, index, values) {
                            return moment(value).format("DD-MMM-YY");
                        }
                    }
                }],
                yAxes: [{
                    ticks: {
                        min : 0,
                        max : Math.ceil((Number(dailyCalorieNeeds) + 1000) /1000) * 1000,
                        stepSize: 1000,
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return value + ' kcal';
                        }
                    }
                }]
            },
            annotation: {
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: dailyCalorieNeeds,
                borderColor: '#FF6383',
                borderWidth: 1.0,
                label: {
                  xAdjust: 0,
                  yAdjust: -15,
                  enabled: true,
                  position: "right",
                  fontStyle: "none",
                  content: `Daily Calorie Allowance`,
                  backgroundColor: '#FF6383'
                }
              }]
            }
        }
    });

    document.querySelector(".stats > .container > .row > .col-6 > .progress > .progress-bar ").style.width = `${(startingWeight - currentWeight) / (startingWeight - targetWeight) * 100}%`;

}