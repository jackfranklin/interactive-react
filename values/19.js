var getGitHubUser = function(name) {
  return fetch('https://api.github.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var GitHubPerson = React.createClass({
  getInitialState: function() {
    return { input: 'jackfranklin' };
  },
  fetchUser: function() {
    // set the loading state here
    getGitHubUser(this.state.input).then(function(info) {
      // unset it here
      this.setState({ name: info.name });
    }.bind(this));
  },
  componentWillMount: function() {
    this.fetchUser();
  },
  onChange: function(e) {
    var newValue = e.target.value;
    // set state here
  },
  fetchClick: function() {
    // fetch the user here
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <div><p>LOADING!</p></div>
      );
    } else {
      return (
        <div>
          <input type="text" value={this.state.input} onChange={this.onChange} />
          <button onClick={this.fetchClick}>Fetch</button>
          <br />
          <p>Name: {this.state.name}</p>
        </div>
      );
    }
  }
});

var App = React.createClass({
  render: function() {
    return <GitHubPerson />;
  }
});
