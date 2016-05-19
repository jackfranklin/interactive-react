var Common = React.createClass({
  render: function() {
    return (
      <div>
        <Link to="/" activeClassName="active-link">INDEX</Link> |
        { this.props.children }
      </div>
    );
  }
});

var Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  go: function() {
    this.context.router.push('/posts/1');
  },
  render: function() {
    return (
      <div>
        <h1>Index page!</h1>
        <button onClick={this.go}>Go to my blog post!</button>
      </div>
    );
  }
});

var BlogPost = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Blog post number { this.props.params.blogId }</h1>
      </div>
    );
  }
});

var App = function() {
  return (
    <Router history={hashHistory}>
      <Route path="" component={Common}>
        <Route path="/" component={Index} />
        <Route path="/posts/:blogId" component={BlogPost} />
      </Route>
    </Router>
  );
}
