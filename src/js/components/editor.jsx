var React = require('react');
var EditableText = require('./editableText.jsx');

var Editor = React.createClass({
    render: function(){
        return (
            <div>
                <EditableText initialValue="test"/>
            </div>
        );
    }
});

module.exports = Editor;