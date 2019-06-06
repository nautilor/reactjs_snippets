import React, { Component } from 'react'
import Button from './Button';

export class Parent extends Component {

    render () {
        return (
            <div>
                <Button/>
                <Button/>
            </div>
        )
    }
}

export default Parent
