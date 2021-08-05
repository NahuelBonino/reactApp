    import React from 'react'
    import ExerciseList from '../components/ExerciseList';
    import Welcome from '../components/Welcome'
    import Boton from '../components/Boton'
    import Loading from '../components/Loading'
    import '../components/styles/Loading.css'
    import FatalError from './500'
    import url from '../config'
    
    class Exercises extends React.Component {

        state = {
             data: [],
             loading: true,
             error:null
        }
                        
         async componentDidMount(){

            await this.fetchExercises()

         }

         fetchExercises = async () => {
            try{
                let res = await fetch(`${url}/exercises`)
                let data = await res.json()

                this.setState({
                    data,
                    loading:false
                    
                })
                
            }
            catch(error){

                this.setState({                
                    loading:false,
                    error              
                })

            }
         }


        render(){
           
            if (this.state.loading){
                return (<Loading />)
            }
            else if (this.state.error){
                return <FatalError/>
            }
            else{
                return (
    
                    <React.Fragment> 
                        <Welcome
                            userName = "Nahuel"      
                        />
                        <ExerciseList
                        
                        exercises = {this.state.data}
                        
                        />
                        <Boton />    
                   </React.Fragment>      

                )
            }
        }


    }


    export default Exercises;