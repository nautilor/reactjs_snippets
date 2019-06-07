import React, { Component } from 'react'

class ClassCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.incrementCounter}>Pressed {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCount
