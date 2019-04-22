const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class Statistics extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" isActive="menuOne" data= { this.props }>
            <div className="stats">
                <h2>Overall Progress</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="title">
                                <h5>Start Weight</h5>
                            </div>
                            <div className="weight">
                                { this.props.starting_weight } kg
                            </div>
                            <div className="date">
                                { helper.formatDateForDisplay(this.props.starting_date) }
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="title">
                                <h5>Current Weight</h5>
                            </div>
                            <div className="weight">
                                { this.props.current_weight } <span>kg</span>
                            </div>
                            <div className="message">

                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="title">
                                <h5>Target Weight</h5>
                            </div>
                            <div className="weight">
                                { this.props.target_weight } kg
                            </div>
                            <div className="date">
                                { helper.formatDateForDisplay(this.props.target_date) }
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <hr/>

                <h4>Current Weight Statistics</h4>
                <canvas id="weightChart" height="110"></canvas>

                <br/>

                <h4>Current Calorie Statistics</h4>
                <canvas id="calorieChart" height="110"></canvas>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0/dist/Chart.min.js"></script>
            <script src="/js/chartjs-plugin-annotation.min.js"></script>
            <script src="/js/chartScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = Statistics;