var Person = React.createClass({
  render: function() {
    var person = this.props.person;
    return <p>My name is {person.name} and my favourite colour is {person.colour}</p>
  }
});

var App = React.createClass({
  render: function() {
    return (
      <Person person={{ name: 'Jack' }} />
    );
  }
});
