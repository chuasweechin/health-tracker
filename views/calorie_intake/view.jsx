const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class Items extends React.Component {
  render() {

    let elements = this.props.data.map( (item, index) => {
        let difference;
        let deleteFormAttribute = `/calorie_intake?_method=DELETE`;
        let postFormAttribute = `/calorie_intake`;

        return  <tr>
                    <td>{ helper.formatDateForDisplay(item.created_at) }</td>
                    <td>{ item.calorie } kcal</td>
                    <td>{ item.description }</td>
                    <td>
                        <form method="POST" action={ deleteFormAttribute }>
                            <input type="hidden" name="calorie_intake_id" value= { item.id }/>
                            <button className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                        </form>
                        <form method="POST" action={ postFormAttribute }>
                            <input type="hidden" name="date" value= { helper.getCurrentDateTime() }/>
                            <input type="hidden" name="calorie" value= { item.calorie }/>
                            <input type="hidden" name="description" value= { item.description }/>
                            <button className="btn btn-info"><i class="far fa-copy"></i></button>
                        </form>
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

class ViewCalorie extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" isActive="menuTwo" data= { this.props }>
            <div className="calorieIntake">
                <div className="title">
                    <h2>Food Calorie Intake</h2>
                    <button className="btn btn-primary"><i className="fas fa-plus"></i>Add New Entry</button>
                </div>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="date" scope="col">Date</th>
                      <th className="calorie" scope="col">Food Calorie</th>
                      <th className="description" scope="col">Food Description</th>
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