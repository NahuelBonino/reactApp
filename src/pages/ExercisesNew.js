import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const ExercisesNew = ({form,onChange,onSubmit}) => (        
        
        <div className="row Fitness-User-Info" style = {{ paddingTop: `200px`}} >
            <div className="col-sm pb-5">
                <Card 
                    {...form}
                />
            </div>
            <div className = "col-sm">
                <ExerciseForm
                    onChange = {onChange} 
                    onSubmit = {onSubmit}
                    form = {form}
                />
            </div>
        </div>
)
        
    

export default ExercisesNew