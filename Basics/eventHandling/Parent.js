import React, { Component } from 'react'
import './componentStyle.css'

class Parent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             value: 'Welcome to ReactJS'
        }
        this.thirdMethod = this.thirdMethod.bind(this)
    }

    firstMethod() {
        this.setState ({
            value: 'This is the first method of handling event'
        })
    }

    secondMethod = () => {
        this.setState ({
            value: 'This is the second method of handling event'
        })
    }

    thirdMethod() {
        this.setState ({
            value: 'This is the third method of handling event'
        })
    }
    
    render() {
        return (
            <div>
               <h1>{this.state.value}</h1>
               <button onClick={() => this.firstMethod()}>Update State</button>
               <button onClick={this.secondMethod}>Update State</button>
               <button onClick={this.thirdMethod}>Update State</button>
            </div>
        )
    }
}

export default Parent
