var Form = React.createClass({
  render: function() {
    return (
      <div>
        <input type="text" ref="textInput" />
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return <Form />
  }
});
