const React = require("react");
const helper = require('../helper');
const HomeDefaultLayout = require('./layouts/homeDefault');

class Home extends React.Component {
  render() {
    return (
        <HomeDefaultLayout title="home" login="true" data= { this.props }>

        </HomeDefaultLayout>
    );
  }
}

module.exports = Home;