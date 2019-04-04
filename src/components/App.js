import React from 'react';
import UserCreate from 'components/UserCreate';
import LanguageContext from 'contexts/LanguageContext';
import ColorContext from 'contexts/ColorContext';
import LanguageSelector from 'components/LanguageSelector';

class App extends React.Component{
    state = {language: 'english'};

    onLanguajeChange = language =>{
        this.setState({language});
    };

    

    render(){
        return (<div class="ui container">
            <LanguageSelector onLanguajeChange={this.onLanguajeChange}/>
            <ColorContext.Provider value="red">
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate/>
                </LanguageContext.Provider>
            </ColorContext.Provider>
        </div>);
    }
};

export default App;