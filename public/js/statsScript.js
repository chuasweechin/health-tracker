let ctx = document.getElementById('myChart').getContext('2d');
let weightDataset = JSON.parse(getCookie('weightLog'));
let targetWeight = JSON.parse(getCookie('target_weight'));

let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weightDataset.xAxis,
        datasets: [{
            label: 'Weight Statistic',
            borderColor: 'rgb(255, 99, 132)',
            data: weightDataset.yAxis
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    callback: function(value, index, values) {
                        return moment(value).format("DD-MM-YYYY");
                    }
                }
            }],
            yAxes: [{
                ticks: {
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
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            label: {
              xAdjust: 2,
              yAdjust: 0,
              enabled: true,
              position: "left",
              fontStyle: "none",
              content: `Target Weight: ${ targetWeight } kg`,
              backgroundColor: 'rgb(75, 192, 192)'
            }
          }]
        }
    }
});