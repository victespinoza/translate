import React from 'react';

class LanguageSelector extends React.Component{
    render(){
        return (
            <div>
            Select a languaje:
            <i className="flag us" onClick={()=>this.props.onLanguajeChange('english')}/>
            <i className="flag ar" onClick={()=>this.props.onLanguajeChange('argentine')}/>
            </div>

        )
    }
}

export default LanguageSelector;