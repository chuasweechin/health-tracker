const React = require("react");
const helper = require('../../helper');
const HomeDefaultLayout = require('../layouts/homeDefault');

class AddGoal extends React.Component {
  render() {

    return (
        <HomeDefaultLayout title="Goal" login="true" data= { this.props }>
            <form className="addGoal" action="/goal" method="POST">
                 <div className="container">
                    <h2>Set Your Target Weight</h2>

                    <div className="row">
                        <div className="col-8 target">
                            Your Target Weight (in kg):
                            <input type="number" className="form-control target" name="target_weight" value= {this.props.target_weight }/>
                            <br/>
                            To Achieve Target By:
                            <input type="date" className="form-control target" name="target_date" defaultValue= { this.props.target_date }/>
                        </div>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Set Your Target"/>
                </div>
            </form>

        </HomeDefaultLayout>
    );
  }
}

module.exports = AddGoal;