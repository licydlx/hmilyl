import React from 'react'
import ReactDom from 'react-dom'
import "./app.css"
import TitileCp from "./components/titileCp"
import InputCp from "./components/inputCp"
import CountryCp from "./components/countryCp"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {inputValue: ''};
    }

    handleInputChange(v){
        this.setState({inputValue: v});
    }

    render(){
        return (
            <div className='lay'>
                <TitileCp />
                <InputCp onInputChange = {this.handleInputChange} />
                <CountryCp inputValue={this.state.inputValue} />
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))