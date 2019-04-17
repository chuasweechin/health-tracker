var React = require('react');
var DefaultLayout = require('../layouts/userDefault');

class Register extends React.Component {
  render() {
    return (
        <DefaultLayout title="Register Account" login="false">
            <form className="register" action="/register" method="POST">
                <div className="container">
                    <h1>Create Your Account</h1>

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

                    <div className="row">
                        <div className="col-6">
                            Weight: <input type="number" className="form-control weight" name="kg" placeholder="kg"/>
                        </div>
                        <div className="col-6">
                            Height: <input type="number" className="form-control weight" name="cm" placeholder="cm"/>
                        </div>
                    </div>

                    <hr/>

                    Username: <input type="text" className="form-control username" name="username"/>
                    Password: <input type="password" className="form-control password" name="password"/>
                    Confirm Password: <input type="password" className="form-control password"/>

                    <input className="btn btn-primary" type="submit" value="Register New Account"/>
                    <a href="/login">To Login Page</a>
                </div>
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = Register;