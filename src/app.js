const script = document.querySelector('.js-script-change');

const makeTemplate = (input) => {
  return `
if (typeof ReactRouter != 'undefined') {
  window.Router = ReactRouter.Router;
  window.Route = ReactRouter.Route;
  window.IndexRoute = ReactRouter.IndexRoute;
  window.Link = ReactRouter.Link;
  window.hashHistory = ReactRouter.hashHistory;
}
${input}
ReactDOM.render(
   <App />,
   document.getElementById('root')
)
  `;
}

const codeMirrorToScript = () => {
  script.innerHTML = makeTemplate(myCodeMirror.getValue());
}

const runReact = () => {
  try {
    window.ThrowInTheTowel.init();
  } catch (e) {
    console.error(e.message);
    const message = e.message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    document.querySelector('#root').innerHTML = `<div id='error'><pre><code>${message}</code></pre></div>`;
  }
}

const initialCode = `
var App = React.createClass({
  render: function() {
    return <h1>Great!</h1>
  }
});
`;

const ta = document.querySelector('textarea');
const myCodeMirror = CodeMirror.fromTextArea(ta, {
  lineNumbers: true,
  mode:  "javascript",
  viewportMargin: Infinity
});

myCodeMirror.setValue(document.querySelector('.js-initial-value').innerHTML);

const button = document.querySelector('button');

button.addEventListener('click', () => {
  codeMirrorToScript();
  runReact();
});


