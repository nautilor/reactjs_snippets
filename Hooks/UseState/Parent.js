import React, { Component } from 'react'
import ClassCount from './ClassCount';
import UseStateCounter from './UseStateCounter';

class Parent extends Component {
    render() {
        return (
            <div>
                <ClassCount />
                <UseStateCounter />
            </div>
        )
    }
}

export default Parent
