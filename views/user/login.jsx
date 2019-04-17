var React = require('react');
var DefaultLayout = require('../layouts/userDefault');

class Login extends React.Component {
  render() {
    return (
        <DefaultLayout title="Login" login="false">
            <form className="login" action="/login" method="POST">
                <h1>Login</h1>
                <input type="text" className="form-control username" name="username" placeholder="Username"/>
                <input type="password" className="form-control password" name="password" placeholder="Password"/>
                <input className="btn btn-primary" type="submit" value="Sign In"/>
                <a href="/register">Register an Account</a>
            </form>
        </DefaultLayout>
    );
  }
}

module.exports = Login;