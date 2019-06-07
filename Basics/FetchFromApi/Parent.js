import React, { Component } from 'react'

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }


    componentDidMount() {
        this.getJoke()
    }

    updateState(value) {
        this.setState({
            value: value.value
        })
    }

    getJoke() {
        fetch("https://api.chucknorris.io/jokes/random")
            .then(result => result.json())
            .then(data => this.updateState(data))
            .catch(error => this.updateState(error))
    }

    render() {

        return (
            <div>
                <p>
                    {this.state.value}
                </p>
                <button onClick={() => this.getJoke()}>Get Another One</button>
            </div>
        )
    }
}

export default Parent
