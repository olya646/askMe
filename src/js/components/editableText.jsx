var React = require('react');

var EditableText = React.createClass({
    propTypes: {
        initialValue: React.PropTypes.string
    },
    
    getInitialState: function(){
        return {
            value: this.props.initialValue || 'value',
            isEditMode: false
        };
    },
    
    render: function(){      
        var content;
        if(this.state.isEditMode){
            content = <input ref="theInput" type="text" onChange={this.handleValueChange} value={this.state.value} onBlur={this.handleToggleEditMode}/>;
        }else{
            content = <span onClick={this.handleToggleEditMode}>{this.state.value}</span>
        }
        
        return content;
    },
    
    handleToggleEditMode: function(){
        this.setState({isEditMode: !this.state.isEditMode}, function(){
            this.refs.theInput.getDOMNode().focus();
        });
    },
    
    handleValueChange: function(event){
        this.setState({value: event.target.value});
    }
});

module.exports = EditableText;