const React = require("react");
const HomeDefaultLayout = require('../layouts/homeDefault');

class Activities extends React.Component {
  render() {
    let elements = this.props.data.map( (item) => {
        return <option value= { item.id } kcal= { item.kcal_per_kg_second }>{ item.name }</option>
    });

    return (
        <select className="form-control activity" name="activity">
            { elements }
        </select>
    );
  }
}

class AddActivity extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <form className="addActivityLog" action="/activity_log" method="POST">
                 <div className="container">
                    <h2>Add New Activity Log</h2>

                    <div className="row">
                        <div className="col-8">
                            Activity:
                            <Activities data={ this.props.activities }/>
                        </div>

                        <div className="col-8">
                            Count: <input type="number" className="form-control count" name="count"/>
                        </div>

                        <div className="col-8">
                            Duration (second): <input type="number" className="form-control duration" name="duration"/>
                        </div>

                        <div className="col-8 calories">
                            Calories Burnt: <label>0</label> kcal
                        </div>
                    </div>
                </div>
                <input type="hidden" className= "selected_calories" name="calories_burnt"/>
                <input className="btn btn-primary" type="submit" value="Update Your Activity Log"/>
            </form>

            <script src="/js/addActivityScript.js"></script>
        </HomeDefaultLayout>
    );
  }
}

module.exports = AddActivity;