var Person = React.createClass({
  render: function() {
    return <p>My name is { this.props.name }</p>;
  }
});

var App = React.createClass({
  getInitialState: function() {
    return {
      people: [{ name: 'Jack' }, { name: 'Olia' }]
    }
  },
  render: function() {
    return (
      <div>
        <p><Person name={this.state.people[0].name} /></p>
        <p><Person name={this.state.people[1].name} /></p>
      </div>
    );
  }
});
