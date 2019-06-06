import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    render() {
        console.log('The PureComponent child is updating corresponding to the Parent')
        return (
            <div>
                <h1>{this.props.value}</h1> 
            </div>
        )
    }
}

export default PureComp
