var Common = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/">INDEX</Link> | <Link to="about">ABOUT</Link>
        { this.props.children }
      </div>
    );
  }
});

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Index page!</h1>
      </div>
    );
  }
});

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is the about page!</h1>
      </div>
    );
  }
});

var App = function() {
  return (
    <Router history={hashHistory}>
      <Route path="" component={Common}>
        <Route path="/" component={Index} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}
