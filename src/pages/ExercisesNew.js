import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import 'bootstrap/dist/css/bootstrap.css'

class ExercisesNew extends React.Component{

    state = {
        form: {
            key : "",
            title: "",
            description: "",
            img : "",
            leftColor: "",
            rightColor: ""
        }
    }   

    handleChange = e => {

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
        
    } 
    
    render(){

        return (
        
            <div className="row Fitness-User-Info" style = {{ paddingTop: `200px`}} >
                <div className="col-sm pb-5">
                    <Card 
                       {...this.state.form}
                    />
                </div>
                <div className = "col-sm">
                    <ExerciseForm
                        onChange = {this.handleChange} 
                        form = {this.state.form}
                    />
                </div>
            </div>
   
        )
    }


}

export default ExercisesNew