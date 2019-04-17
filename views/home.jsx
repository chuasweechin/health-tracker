var React = require("react");
var HomeDefaultLayout = require('./layouts/homeDefault');

class Activities extends React.Component {
  render() {
    let elements = this.props.data.map( (item) => {
        return <option value= { item.kcal_per_kg_second} data-id= { item.id }>{ item.name }</option>
    });

    return (
        <select className="form-control activity" name="activity">
            { elements }
        </select>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>
            <form className="addActivityLog" action="/activity_log" method="POST">
                 <div className="container">
                    <h1>Add New Activity Log</h1>

                    <div className="row">
                        <div className="col-12">
                            Activity:
                            <Activities data={ this.props.activities }/>
                        </div>

                        <div className="col-12">
                            Count: <input type="number" className="form-control count" name="count"/>
                        </div>

                        <div className="col-12">
                            Duration (second): <input type="number" className="form-control duration" name="duration"/>
                        </div>

                        <div className="col-12 calories">
                            Calories Burnt: <label>0</label> kcal
                        </div>
                    </div>
                </div>
            </form>
        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;