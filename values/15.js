var Form = React.createClass({
  componentDidMount: function() {
    // this.refs.textInput.focus();
  },
  getInitialState: function() {
    return { input: '' }
  },
  onChange: function(e) {
    var value = e.target.value;
    this.setState({ input: value });
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
