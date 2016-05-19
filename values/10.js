var App = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  increment: function() {
    this.setState({ count: this.state.count + 1 });
  },
  decrement: function() {
    this.setState({ count: this.state.count - 1 });
  },
  render: function() {
    return (
      <div>
        { this.state.count }
        <br />
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
});
