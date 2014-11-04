var React = require('react');

var EditableText = React.createClass({
    propTypes: {
        initialValue: React.PropTypes.string
    },
    
    getInitialState: function(){
        return {
            value: this.props.initialValue || 'value',
            isEditMode: false;
        };
    },
    
    render: function(){      
        var content;
        if(this.state.isEditMode){
            content = <input type="text" onChange={handleValueChange} value={this.state.value} onBlur={this.handleToggleEditMode}/>;
        }else{
            content = <span onClick={this.handleToggleEditMode}>this.state.value</span>
        }
        
        return content;
    },
    
    handleToggleEditMode: function(){
        this.setState({isEditMode: !this.state.isEditMode});
    },
    
    handleValueChanged: function(newValue){
        this.setState({value: newValue});
    }
});

module.exports = EditableText;