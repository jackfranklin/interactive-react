'use strict';

var script = document.querySelector('.js-script-change');

var makeTemplate = function makeTemplate(input) {
  return '\n' + input + '\nReactDOM.render(\n   <App />,\n   document.getElementById(\'root\')\n)\n  ';
};

var codeMirrorToScript = function codeMirrorToScript() {
  script.innerHTML = makeTemplate(myCodeMirror.getValue());
};

var runReact = function runReact() {
  try {
    window.ThrowInTheTowel.init();
  } catch (e) {
    console.error(e.message);
    var message = e.message.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    document.querySelector('#root').innerHTML = '<div id=\'error\'><pre><code>' + message + '</code></pre></div>';
  }
};

var initialCode = '\nvar App = React.createClass({\n  render: function() {\n    return <h1>Great!</h1>\n  }\n});\n';

var ta = document.querySelector('textarea');
var myCodeMirror = CodeMirror.fromTextArea(ta, {
  lineNumbers: true,
  mode: "javascript",
  viewportMargin: Infinity
});

myCodeMirror.setValue(document.querySelector('.js-initial-value').innerHTML);

var button = document.querySelector('button');

button.addEventListener('click', function () {
  codeMirrorToScript();
  runReact();
});
