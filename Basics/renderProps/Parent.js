import React, { Component } from 'react'
import Button from './Button';
import Updater from './Updater';

class Parent extends Component {

    render() {
        return (
            <div>
                <Updater render={(count, clickHandler) => <Button count={count} onClick={clickHandler} />} />
                <Updater render={(count, clickHandler) => <Button count={count} onClick={clickHandler} />} />
            </div>
        )
    }
}

export default Parent
