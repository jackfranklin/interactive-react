var getGitHubUser = function(name) {
  return fetch('http://github-proxy-api.herokuapp.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var Common = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/" activeClassName="active-link">INDEX</Link> | <Link to="/github" activeClassName="active-link">GitHub Index</Link>
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
    this.context.router.push('/github/jackfranklin');
  },
  render: function() {
    return (
      <div>
        <h1>Index page!</h1>
        <button onClick={this.go}>View Jack's GitHub data</button>
      </div>
    );
  }
});

var GitHubPerson = React.createClass({
  getInitialState() {
    return { user: {} };
  },
  componentWillMount() {
    getGitHubUser(this.props.params.name).then(function(data) {
      this.setState({ user: data });
    }.bind(this));
  },
  render: function() {
    return <p>Name: { this.state.user.name } from { this.state.user.company }</p>;
  }
});

var GitHubIndex = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return { value: '' };
  },
  onChange: function(e) {
    this.setState({ value: e.target.value });
  },
  go: function() {
    this.context.router.push('/github/' + this.state.value);
  },
  render: function() {
    return (
      <div>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <button onClick={this.go}>Go!</button>
      </div>
    );
  }
});

var App = function() {
  return (
    <Router history={hashHistory}>
      <Route path="" component={Common}>
        <Route path="/" component={Index} />
        <Route path="/github" component={GitHubIndex} />
        <Route path="/github/:name" component={GitHubPerson} />
      </Route>
    </Router>
  );
}
