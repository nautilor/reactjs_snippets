import React, { Component } from 'react'
import FirstNestedChild from './FirstNestedChild'
import { Provider } from './Context'

class Parent extends Component {
    render() {
        return (
            <div>
                <Provider value={"Hello Humans"}>
                    <FirstNestedChild />
                </Provider>
            </div>
        )
    }
}

export default Parent
