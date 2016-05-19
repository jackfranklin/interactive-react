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
  renderPeople: function() {
    return this.state.people.map(function(person) {
      return <Person name={person.name} />;
    });
  },
  render: function() {
    return (
      <div>
        { this.renderPeople() }
      </div>
    );
  }
});
