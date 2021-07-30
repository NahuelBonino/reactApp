import React from 'react'
import Exercises from '../pages/Exercises'
import Card from './Card'


const ExerciseList = ({exercises}) => (

            exercises.map( (exercise) => {

              return ( <div className="pt-5">
                            <Card 
                                key = {exercise.id}
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




export default ExerciseList;