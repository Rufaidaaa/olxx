import React from'react'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Header from './Header'
import Info from './Info'

function Routers() {
    return(
        <Router>
            <Route exact path="/" component={Header} />
            <Route exact path="/info" component={Info} />
        </Router>
    )
}
export default Routers