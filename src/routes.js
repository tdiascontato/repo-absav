import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Info from './Pages/info'
import Main from './Pages/main'

const Routes = () => (
    <Switch>
        <Route exact path = '/' component = {Main} />
        <Route path = '/info' component = {Info} />
    </Switch>    
)

export default Routes;