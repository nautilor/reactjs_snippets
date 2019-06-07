import React, { Component } from 'react'
import { Consumer } from './Context'

class SecondNestedChild extends Component {
    render() {
        return (
            <Consumer>
                {(value) => value}
            </Consumer>
        )
    }
}

export default SecondNestedChild
