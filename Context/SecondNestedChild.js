import React, { Component } from 'react'
import { Consumer } from './Context'

export class SecondNestedChild extends Component {
    render() {
        return (
            <Consumer>
                {(value) => value}
            </Consumer>
        )
    }
}

export default SecondNestedChild
