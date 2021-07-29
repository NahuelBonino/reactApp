import React from 'react'
import './styles/Boton.css'
import {Link} from 'react-router-dom'


//con arrow functions


const Boton = () => (

    <div className='container mx-auto'>
        <div>           
            <Link to="exercise/new"><img className="boton" src = 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d' />
            </Link>
        </div>
    </div> 

)


export default Boton;
