var Name = React.createClass({
  render: function() {
    return <p>My name is {this.props.name}</p>
  }
});

var App = React.createClass({
  render: function() {
    return (
      <Name />
    );
  }
});
