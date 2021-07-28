import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Excersices from '../pages/Exercises'
import ExcersicesNew from '../pages/ExercisesNew'

function App(){

 return  (

    <BrowserRouter>

        <Route exact path="/exercise" component={Excersices}/>
        <Route exact path="/exercise/new" component={ExcersicesNew}/>     


    </BrowserRouter>


 )

}

export default App;