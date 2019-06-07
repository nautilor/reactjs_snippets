import React, { Component } from 'react'

class Updater extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState(prev => ({ count: prev.count + 1 }))
    }


    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.clickHandler)}
            </div>
        )
    }
}

export default Updater

