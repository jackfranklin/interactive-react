var Counter = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  increment: function() {
    this.setState({ count: this.state.count + 1 });
  },
  decrement: function() {
    this.setState({ count: this.state.count - 1 });
  },
  reset: function() {
    this.setState(this.getInitialState());
  },
  render: function() {
    return (
      <div>
        { this.state.count }
        <br />
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return <Counter />
  }
});
