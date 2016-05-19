var getGitHubUser = function(name) {
  return fetch('http://jsonplaceholder.typicode.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var Common = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/" activeClassName="active-link">INDEX</Link>
        { this.props.children }
      </div>
    );
  }
});

var Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  go: function() {
    this.context.router.push('/github/1');
  },
  render: function() {
    return (
      <div>
        <h1>Index page!</h1>
        <button onClick={this.go}>View User 1</button>
      </div>
    );
  }
});

var GitHubPerson = React.createClass({
  // do your work here!
  render: function() {
    return <p>Your work here</p>;
  }
});

var App = function() {
  return (
    <Router history={hashHistory}>
      <Route path="" component={Common}>
        <Route path="/" component={Index} />
        // define your new route here
      </Route>
    </Router>
  );
}
