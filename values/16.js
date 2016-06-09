var getGitHubUser = function(name) {
  return fetch('http://github-proxy-api.herokuapp.com/users/' + name).then(function(data) {
    return data.json();
  });
};

var App = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    getGitHubUser('jackfranklin').then(function(info) {
      console.log('full name', info.name);
    }.bind(this));
  },
  render: function() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
      </div>
    );
  }
});
