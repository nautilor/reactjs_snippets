import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary';
import Greet from './Greet';

class Parent extends Component {

    render() {
        return (
            <div>
            <ErrorBoundary>
               <Greet name="Charles"/>
            </ErrorBoundary>
            <ErrorBoundary>
               <Greet name="Francis"/>
            </ErrorBoundary>
            <ErrorBoundary>
               <Greet name="Annabelle"/>
            </ErrorBoundary>

            <ErrorBoundary>
               <Greet name="Charles"/>
               <Greet name="Lucas"/>
               <Greet name="Maria"/>
            </ErrorBoundary>
            

            </div>
        )
    }
}

export default Parent
