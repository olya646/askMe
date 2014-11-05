var React = require('react');

var EditableText = React.createClass({
    propTypes: {
        initialValue: React.PropTypes.string
    },
    
    getInitialState: function(){
        return {
            value: this.props.initialValue || 'value',
            isEditMode: false,
            lines: 1 
        };
    },
    
    render: function(){      

        var textareaStyle = {
            height: (this.state.lines * 1.2) + 'rem'
        }
        
        return (
            <span className="editable-text">    
               <textarea style={textareaStyle} onChange={this.handleValueChange} value={this.state.value} onBlur={this.handleToggleEditMode}/>
            </span>
        );
    },
    
    handleToggleEditMode: function(){
        this.setState({isEditMode: !this.state.isEditMode}, function(){
            this.refs.theInput.getDOMNode().focus();
        });
    },
    
    handleValueChange: function(event){
        var linesCount = event.target.value.split(/\r*\n/).length;
        this.setState({value: event.target.value, lines: linesCount});
    }
});

module.exports = EditableText;