const React = require("react");
const helper = require('../helper');
const HomeDefaultLayout = require('./layouts/homeDefault');

class Statistics extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <div className="stats">
                <h2>Weight Statistics</h2>
                <canvas id="myChart"></canvas>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
            <script src="/js/statsScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = Statistics;