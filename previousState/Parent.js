import React, { Component } from 'react'

export class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value: 'Welcome to ReactJS',
             previous: []
        }
        this.firstChange = this.firstChange.bind(this)
        this.secondChange = this.secondChange.bind(this)
        this.testSecondChange = this.testSecondChange.bind(this)
        this.testFirstChange = this.testFirstChange.bind(this)
    }

    secondChange() {
        let value = Math.floor(Math.random() * 10000)
        this.setState({
            value: value,
            previous: this.state.previous.concat(this.state.value)
        })
    }

    firstChange() {
        let value = Math.floor(Math.random() * 10000)
        this.setState(prevState => ({
            value: value,
            previous: prevState.previous.concat(prevState.value)
        }))
    }

    testSecondChange() {
        // Note how in this case there's only one state change
        this.secondChange()
        this.secondChange()
        this.secondChange()
        this.secondChange()
    }

    testFirstChange() {
        this.firstChange()
        this.firstChange()
        this.firstChange()
        this.firstChange()
    }
    
    render() {
        return (
            <div>
               <h1>New State</h1>
               <p>{this.state.value}</p>
               <h1>Previous States</h1>
               {this.state.previous.map(state => <p key={state}>{state}</p>)}
               <button onClick={this.firstChange}>Update State</button>
               <button onClick={this.secondChange}>Update State</button>
               <br/>
               <button onClick={this.testSecondChange}>Test Second Change</button>
               <button onClick={this.testFirstChange}>Test First Change</button>
            </div>
        )
    }
}

export default Parent
