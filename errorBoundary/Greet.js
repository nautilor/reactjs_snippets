import React, { Component } from 'react'

class Greet extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             names: ['Charles', 'Francis', 'Lucas']
        }
    }
    
    render() {
        if (!this.state.names.includes(this.props.name)) {
            throw Error('UnknownPerson')
        }
        return (
            <h1>Hello {this.props.name} </h1>
        )
    }
}

export default Greet
