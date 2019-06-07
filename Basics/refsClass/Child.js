import React, { Component } from 'react'

class Child extends Component {
    
    constructor(props) {
        super(props)
        this.ref = React.createRef()
    }

    focus() {
        this.ref.current.focus()
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.ref}/>
            </div>
        )
    }
}

export default Child
