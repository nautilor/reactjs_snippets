import React, { Component } from 'react'
import PureComp from './PureComp';
import NormalComp from './NormalComp';

class Parent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             value: 'Take a look at the console'
        }
    }

    componentDidMount() {
        setInterval(() => {
            console.log(' *** Parent is updating the state ***')
            this.setState({
                value: 'Take a look at the console'
            })}, 1000)
    }
    
    render() {
        return (
            <div>
                <PureComp value={this.state.value}/>
                <NormalComp value={this.state.value}/>
            </div>
        )
    }
}

export default Parent
