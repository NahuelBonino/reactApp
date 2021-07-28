import React from 'react'
import Exercises from '../pages/Exercises'
import Card from './Card'


function ExerciseList(props){
    
    return(
      
            props.exercises.map( (exercise) => {

              return ( <div className="pb-5"><Card 
                            title={exercise.title}
                            description={exercise.description}
                            img = {exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                            />
                        </div>
                    )
            }) //itera todos los elemtos del array
        
    )



}

export default ExerciseList;