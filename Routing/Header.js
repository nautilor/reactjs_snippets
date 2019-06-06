import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Header extends Component {
    render() {
        return (
            <header>
                <h3>
                    <Link to={'/'}>Main</Link>
                    &nbsp;
                    <Link to={'/about'}>About</Link>
                    &nbsp;
                    <Link to={'/info'}>Info</Link>
                </h3>
            </header>
        )
    }
}

export default Header
