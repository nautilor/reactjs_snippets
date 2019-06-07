import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import MainPage from './MainPage'
import About from './About'
import Info from './Info'

/* This snippet require react-router-dom */
class Parent extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={MainPage} />
                        <Route exact path={'/about'} component={About} />
                        <Route exact path={'/info'} component={Info} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Parent
