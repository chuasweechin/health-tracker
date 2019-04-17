const React = require('react');

class HomeDefaultLayout extends React.Component {
  render() {
    let logoutElement;

    if (this.props.login === "true") {
        logoutElement = <div className="logout"><a href="/logout">Logout</a></div>;
    } else {
        logoutElement = <div className="logout"></div>;
    }

    return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>

                <body>
                    <div className="header">
                        <div className="logo">Fitness <span>Tracker</span></div>
                        { logoutElement }
                    </div>

                    <div className="main">
                        <div className="nav">
                            <div className="container profile">
                                <div className="row sectionOne">
                                    <img className="col-6 image" src="/img/profile.png"/>
                                    <div className="col-12 name">{ this.props.data.name }</div>
                                    <div className="col-12 age">{ this.props.data.gender }, { this.props.data.age } years</div>
                                </div>

                                <div className="row sectionTwo">
                                    <div className="col-6 weight">
                                        <div className="title">Weight</div>
                                        <div className="content">{ this.props.data.weight }<span> kg</span></div>
                                    </div>
                                    <div className="col-6 height">
                                        <div className="title">Height</div>
                                        <div className="content">{ this.props.data.height }<span> cm</span></div>
                                    </div>
                                </div>
                            </div>

                            <div className="menu">
                                <div><a href="/">Home</a></div>
                                <div><a href="/stats">Statistics</a></div>
                                <div><a href="/weight_log/new">Update Your Weight Log</a></div>
                                <div><a href="/activity_log/new">Update Your Activity Log</a></div>
                            </div>
                        </div>

                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </body>
            </html>
    );
  }
}

module.exports = HomeDefaultLayout;