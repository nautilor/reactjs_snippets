import React, {Component} from 'react'

const Updater = OriginalComp => {
    class NewComp extends Component {
        
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
            this.clickHandler = this.clickHandler.bind(this)
        }
        clickHandler() {
            this.setState(prev => ({count: prev.count + 1}))
        }

        render() {
            return <OriginalComp onClick={this.clickHandler} count={this.state.count}/>
        }
    }
    return NewComp
}

export default Updater
