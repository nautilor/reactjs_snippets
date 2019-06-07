import React, { Component } from 'react'
import MemoChild from './MemoChild';
import NormalChild from './NormalChild';

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
                <MemoChild value={this.state.value}/>
                <NormalChild value={this.state.value}/>
            </div>
        )
    }
}

export default Parent
