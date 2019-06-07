import React, { Component } from 'react'

class NormalComp extends Component {

    render() {
        console.log('The NormalComponent child is updating corresponding to the Parent')
        return (
            <div>
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

export default NormalComp
