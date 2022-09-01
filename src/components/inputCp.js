import React from 'react'
import "./inputCp.css"

export default class InputCp extends React.Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
    }
    
    inputChange(e){
        this.props.onInputChange(e.target.value);
    }

    render(){
        return (
            <div className='inputLay'>
                <input className='inputDec' type="text" placeholder="Search a country" onChange={(e) => this.inputChange(e)}></input>
            </div>  
        )
    }
}