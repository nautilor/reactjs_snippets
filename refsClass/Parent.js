import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {
    
    constructor(props) {
        super(props)
        this.childRef = React.createRef();
    }

    clickHandler = () => {
        this.childRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <Child ref={this.childRef}/>    
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default Parent
