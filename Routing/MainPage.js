import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';

export class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>This is the Main Page</h1>
            </div>
        )
    }
}

export default MainPage
