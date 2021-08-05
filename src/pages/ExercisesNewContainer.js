import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../components/Loading'
import FatalError from './500'
import ExercisesNew from './ExercisesNew'
import url from '../config'


class ExercisesNewContainer extends React.Component{

    state = {
        form: {
            key : "",
            title: "",
            description: "",
            img : "",
            leftColor: "",
            rightColor: ""
        },
        loading:false,
        error:null     
    }   

    handleChange = e => {

        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
        
    } 

    
    handleSubmit = async e => {

        this.setState({
            loading:true,
        })

        e.preventDefault()

        try{
            let config = {
                method: 'POST',
                headers : {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercises`,config)
            let json = await res.json()
            console.log(json)
            this.props.history.push('/exercise')
        }
        catch(error){
            this.setState({
                loading:false,
                error
            })

        }

    }
    
    render(){

        if (this.state.loading)
            return (<Loading />)
        
        else if (this.state.error)
             return <FatalError/>
        
        else return <ExercisesNew
                    form = {this.state.form}
                    onChange = {this.handleChange}
                    onSubmit = {this.handleSubmit}
                     />
    }


}

export default ExercisesNewContainer