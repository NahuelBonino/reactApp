import React from 'react'



const Welcome = (props) => (

    <div className="Container mx-auto">
            <div className="Fitness-User-Info">
                <h1>
                    Hello {props.userName}
                </h1>
                <p>
                    Let's workout to get someone gains!
                </p>
            </div>
    </div>



)

export default Welcome;