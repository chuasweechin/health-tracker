const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class WeightLog extends React.Component {
  render() {
    let elements;

    // this is to handle cases where the user only have 1 weight left in his weight log
    // user should minimum have 1 weight entry in his weight log
    if (this.props.data.length === 1) {
        elements = this.props.data.map( (item, index) => {

            return  <tr>
                        <td>{ helper.formatDateTime(item.created_at) }</td>
                        <td>{ item.weight_in_kg } kg</td>
                        <td> N.A.</td>
                        <td></td>
                    </tr>
        });

    } else {
        elements = this.props.data.map( (item, index) => {
            let difference;
            let deleteFormAttribute = `/weight_log?_method=DELETE`;

            if (index === this.props.data.length - 1) {
                difference = 'N.A.';
            } else {
                difference = `${item.weight_in_kg - this.props.data[index + 1].weight_in_kg} kg`;
            }

            return  <tr>
                        <td>{ helper.formatDateTime(item.created_at) }</td>
                        <td>{ item.weight_in_kg } kg</td>
                        <td className="difference">{ difference }</td>
                        <td>
                            <form method="POST" action={ deleteFormAttribute }>
                                <input type="hidden" name="weight_log_id" value= { item.id }/>
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

class Home extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <div className="weightLog">
                <div className="title">
                    <h2>Your Weight Log</h2>
                    <button className="btn btn-success">Add New Entry</button>
                </div>

                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th className="date" scope="col">Date</th>
                      <th className="weight" scope="col">Weight</th>
                      <th className="difference" scope="col">Weight Progress</th>
                      <th className="action" scope="col">Action</th>
                    </tr>
                  </thead>

                  <WeightLog data={ this.props.weights }/>

                </table>
            </div>
            <script src="/js/weightLogScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;