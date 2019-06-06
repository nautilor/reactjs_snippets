import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Clicked {this.props.count} times</button>
        )
    }
}

export default Button
