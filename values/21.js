var Index = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Index page!</h1>
        <Link to="about">About page</Link>
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
      <Route path="/" component={Index} />
      <Route path="/about" component={About} />
    </Router>
  );
}
