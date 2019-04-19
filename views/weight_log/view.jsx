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
            let editFormAttribute = `/weight_log?_method=PUT`;

            return  <tr>
                        <td>
                            { helper.formatDateTime(item.created_at) }
                        </td>
                        <td>
                            { item.weight_in_kg } kg
                        </td>
                        <td>
                            <form method="POST" action={ editFormAttribute }>
                                <button className="btn btn-primary"><i className="fa fa-edit"></i></button>
                            </form>
                        </td>
                    </tr>
        });
    } else {
        elements = this.props.data.map( (item, index) => {
            let editFormAttribute = `/weight_log?_method=PUT`;
            let deleteFormAttribute = `/weight_log?_method=DELETE`;

            return  <tr>
                        <td>
                            { helper.formatDateTime(item.created_at) }
                        </td>
                        <td>
                            { item.weight_in_kg } kg
                        </td>
                        <td>
                            <form method="POST" action={ editFormAttribute }>
                                <button className="btn btn-primary"><i className="fa fa-edit"></i></button>
                            </form>
                            <form method="POST" action={ deleteFormAttribute }>
                                <input type="hidden" name="weight_log_id" value= { item.id }/>
                                <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
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
                      <th className="weight" scope="col">Weight (in kg)</th>
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