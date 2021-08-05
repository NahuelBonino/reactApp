import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Excersices from '../pages/Exercises'
import ExcersicesNewContainer from '../pages/ExercisesNewContainer'
import NotFound from '../pages/NotFound'

const App = () => (

    <BrowserRouter>
      <Switch>
        <Route exact path="/exercise" component={Excersices}/>
        <Route exact path="/exercise/new" component={ExcersicesNewContainer}/>
        <Route component={NotFound}/>     
      </Switch>
    </BrowserRouter>

)



export default App;