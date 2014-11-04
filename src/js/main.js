window.React = require('react'); //TODO: Only for develping. Remove window.
var app = require('./components/editor.jsx');

React.renderComponent(app(null), document.getElementById("main"));