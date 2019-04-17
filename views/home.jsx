const React = require("react");
const helper = require('../helper');
const HomeDefaultLayout = require('./layouts/homeDefault');

class ActivityLog extends React.Component {
  render() {
    let elements = this.props.data.map( (item, index) => {
        return  <tr>
                    <td>{ index + 1 }</td>
                    <td>{ helper.formatDateTime(item.created_at) }</td>
                    <td>{ item.name }</td>
                    <td>{ item.activity_count }</td>
                    <td>{ item.duration_in_second } seconds</td>
                    <td>{ item.kcal_burnt } kcal</td>
                </tr>
    });

    return (
        <tbody>
            { elements }
        </tbody>
    );
  }
}

class WeightLog extends React.Component {
  render() {
    let elements = this.props.data.map( (item, index) => {
        return  <tr>
                    <td>{ index + 1 }</td>
                    <td>{ helper.formatDateTime(item.created_at) }</td>
                    <td>{ item.weight_in_kg } kg</td>
                </tr>
    });

    return (
        <tbody>
            { elements }
        </tbody>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <div className="table-responsive activityLog">
                <h2>Your Activity Log</h2>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Activity</th>
                      <th scope="col">Count</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Kcal Burnt</th>
                    </tr>
                  </thead>
                  <tbody>
                     <ActivityLog data={ this.props.activities }/>
                  </tbody>
                </table>
            </div>

            <div className="table-responsive weightLog">
                <h2>Your Weight Log</h2>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Date</th>
                      <th scope="col">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                     <WeightLog data={ this.props.weights }/>
                  </tbody>
                </table>
            </div>

        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;