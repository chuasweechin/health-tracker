const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class Items extends React.Component {
  render() {
    let elements;

    // this is to handle cases where the user only have 1 calorie entry
    if (this.props.data.length === 1) {
        elements = this.props.data.map( (item, index) => {

            return  <tr>
                        <td>{ helper.formatDateForDisplay(item.created_at) }</td>
                        <td>{ item.calorie }</td>
                        <td>{ item.description }</td>
                        <td></td>
                    </tr>
        });

    } else {
        elements = this.props.data.map( (item, index) => {
            let difference;
            let deleteFormAttribute = `/calorie_intake?_method=DELETE`;

            return  <tr>
                        <td>{ helper.formatDateForDisplay(item.created_at) }</td>
                        <td>{ item.calorie }</td>
                        <td>{ item.description }</td>
                        <td>
                            <form method="POST" action={ deleteFormAttribute }>
                                <input type="hidden" name="calorie_intake_id" value= { item.id }/>
                                <button className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                            </form>
                        </td>
                    </tr>
        });
    }

    return (
        <tbody>
            { elements }
        </tbody>
    );
  }
}

class ViewCalorie extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <div className="calorieIntake">
                <div className="title">
                    <h2>Your Food Calorie Intake</h2>
                    <button className="btn btn-primary">Add New Entry</button>
                </div>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="date" scope="col">Date</th>
                      <th className="calorie" scope="col">Food Calorie</th>
                      <th className="description" scope="col">Description</th>
                      <th className="action" scope="col">Action</th>
                    </tr>
                  </thead>

                  <Items data={ this.props.calories }/>

                </table>
            </div>
            <script src="/js/calorieIntakeScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = ViewCalorie;