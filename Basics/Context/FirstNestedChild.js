import React, { Component } from 'react'
import SecondNestedChild from './SecondNestedChild'

class FirstNestedChild extends Component {
    render() {
        return (
            <div>
                <SecondNestedChild />
            </div>
        )
    }
}

export default FirstNestedChild
