const React = require("react");
const HomeDefaultLayout = require('../layouts/homeDefault');

class AddGoal extends React.Component {
  render() {
    let dailyCalorieNeeds = this.props.current_weight * 0.9 * 24 * 1 * 1.3;

    return (
        <HomeDefaultLayout title="Goal" login="true" data= { this.props }>
            <form className="addGoal" action="/goal" method="POST">
                 <div className="container">
                    <h2>Set Your Target Weight</h2>

                    <div className="row">
                        <div className="col-8 target">
                            Your Target Weight (in kg):
                            <input type="number" className="form-control target" name="target" value= {this.props.target_weight }/>
                        </div>

                        <div className="col-8 calories-require">
                            Your Daily Calorie Needs: <label>{ dailyCalorieNeeds }</label>
                        </div>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Set Your Goal"/>
                </div>
            </form>

        </HomeDefaultLayout>
    );
  }
}

module.exports = AddGoal;