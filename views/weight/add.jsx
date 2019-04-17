const React = require("react");
const HomeDefaultLayout = require('../layouts/homeDefault');

class AddWeight extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <form className="addWeight" action="/weight_log" method="POST">
                 <div className="container">
                    <h2>Update Your Weight</h2>

                    <div className="row">
                        <div className="col-8">
                            Your New Weight (in kg):
                            <input type="number" className="form-control weight" name="weight"/>
                        </div>
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Update Your Weight Log"/>
            </form>
        </HomeDefaultLayout>
    );
  }
}

module.exports = AddWeight;