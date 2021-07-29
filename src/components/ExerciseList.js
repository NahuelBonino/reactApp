import React from 'react'
import Exercises from '../pages/Exercises'
import Card from './Card'


const ExerciseList = ({exercises}) => (

            exercises.map( (exercise) => {

              return ( 
                        <Card 
                            key = {exercise.id}
                            title={exercise.title}
                            description={exercise.description}
                            img = {exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                  
                    )
            }) //itera todos los elemtos del array
        
)




export default ExerciseList;