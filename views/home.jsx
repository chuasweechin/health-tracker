var React = require("react");
var DefaultLayout = require('./layouts/default');

class Home extends React.Component {
  render() {
    console.log(this.props.types);
    return (
        <DefaultLayout title="home" login="false">
            <h3>Hello</h3>
        </DefaultLayout>
    );
  }
}

module.exports = Home;