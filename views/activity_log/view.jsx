const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class ActivityLog extends React.Component {
  render() {
    let elements = this.props.data.map( (item, index) => {
        return  <tr>
                    <td>
                        { helper.formatDateTime(item.created_at) }
                    </td>
                    <td>
                        { item.name }
                    </td>
                    <td>
                        { item.activity_count }
                    </td>
                    <td>
                        { item.duration_in_second }
                    </td>
                    <td>
                        { item.kcal_burnt }
                    </td>
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
                      <th className="date" scope="col">Date</th>
                      <th scope="col">Activity</th>
                      <th scope="col">Count</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Kcal Burnt</th>
                    </tr>
                  </thead>

                  <ActivityLog data={ this.props.activities }/>

                </table>
            </div>
        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;