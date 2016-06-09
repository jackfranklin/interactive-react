var getGitHubUser = function(name) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      fetch('http://github-proxy-api.herokuapp.com/users/' + name).then(function(data) {
        resolve(data.json());
      });
    }, 2000);
  });
};

var GitHubPerson = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    // set the loading state here
    getGitHubUser(this.props.name).then(function(info) {
      // unset it here
      this.setState({ name: info.name });
    }.bind(this));
  },
  render: function() {
    if (this.state.isLoading) {
      return (
        <div><p>LOADING!</p></div>
      );
    } else {
      return (
        <div>
          <p>Name: {this.state.name}</p>
        </div>
      );
    }
  }
});

var App = React.createClass({
  render: function() {
    return <GitHubPerson name="jackfranklin" />;
  }
});
