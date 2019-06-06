import React, { Component } from 'react'
import Updater from './Updater'; 

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Clicked {this.props.count} times</button>
        )
    }
}

export default Updater(Button)
