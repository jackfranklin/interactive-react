var Index = React.createClass({
  render: function() {
    return <h1>You are on the index page!</h1>;
  }
});

var App = function() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Index} />
    </Router>
  );
}
