import React, { Component } from 'react'
import UseEffect from './UseEffect'
import ClassCounter from './ClassCounter'

class Parent extends Component {
    render() {
        return (
            <div>
                <UseEffect />
                <ClassCounter />
            </div>
        )
    }
}

export default Parent
