var Person = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return <p>My name is { this.props.name }</p>;
  }
});

var App = React.createClass({
  render: function() {
    return (
      <Person />
    );
  }
});
