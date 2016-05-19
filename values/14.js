var Form = React.createClass({
  getInitialState: function() {
    return { input: '' }
  },
  onChange: function(e) {
    var value = e.target.value;
    // set the state of the value here
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="textInput" value={this.state.input} onChange={this.onChange} />
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return <Form />
  }
});
