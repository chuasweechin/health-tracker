edit.jsxvar React = require("react");
var HomeDefaultLayout = require('./layouts/homeDefault');

class Home extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true">

            <form className="register" action="/register" method="POST">
                <div className="container">
                    <h1>Edit Your Account</h1>

                    <div className="row">
                        <div className="col-6">
                            First Name: <input type="text" className="form-control firstname" name="firstname"/>
                        </div>
                        <div className="col-6">
                            Last Name: <input type="text" className="form-control lastname" name="lastname"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            Gender:
                            <select className="form-control gender" name="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="col-6">
                            Birthday: <input type="text" className="form-control birthday" name="birthday" placeholder="YYYY-MM-DD"/>
                        </div>
                    </div>

                    <input className="btn btn-primary" type="submit" value="Update Account"/>
                </div>
            </form>


        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;