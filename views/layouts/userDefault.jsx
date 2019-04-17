const React = require('react');

class UserDefaultLayout extends React.Component {
  render() {
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
                    </div>
                    {this.props.children}
                </body>
            </html>
    );
  }
}

module.exports = UserDefaultLayout;