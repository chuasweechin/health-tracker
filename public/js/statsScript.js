let ctx = document.getElementById('myChart').getContext('2d');

let weightDataset = JSON.parse(getCookie('weightLog'));
console.log(weightDataset);
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: weightDataset.xAxis,
        datasets: [{
            label: 'Weight Trend',
            borderColor: 'rgb(255, 99, 132)',
            data: weightDataset.yAxis
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function(value, index, values) {
                        return value + ' kg';
                    }
                }
            }]
        }
    }
});