var App = React.createClass({
  getInitialState: function() {
    return { buttonOn: false }
  },
  toggle: function() {
    // write some code here
  },
  render: function() {
    return (
      <div>
        { this.state.buttonOn? 'ON' : 'OFF' }
        <br />
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
});
