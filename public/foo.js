'use strict';

var heading = document.querySelector('h3');

heading.addEventListener('click', function () {
  console.log('i ran');
  var script = document.querySelector('.js-script-change');

  script.innerHTML = 'console.log("hello world")';

  window.ThrowInTheTowel.init();
});
