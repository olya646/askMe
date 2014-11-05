var React = require('react');
var EditableText = require('./editableText.jsx');

var Editor = React.createClass({
    render: function(){
        return (
            <div className="editor">
                <div className="question">
                    <EditableText initialValue="test"/>
                </div>
            </div>
        );
    }
});

module.exports = Editor;