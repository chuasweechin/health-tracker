const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class ViewCalorie extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <div className="calorieIntake">
                <div className="title">
                    <h2>Your Food Calorie Intake</h2>
                    <button className="btn btn-success">Add New Entry</button>
                </div>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="date" scope="col">Date</th>
                      <th className="calorie" scope="col">Calorie Intake</th>
                      <th className="remark" scope="col">Remark</th>
                      <th className="action" scope="col">Action</th>
                    </tr>
                  </thead>

                </table>
            </div>
            <script src="/js/weightLogScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = ViewCalorie;