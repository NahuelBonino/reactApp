import React from 'react'
import './styles/Card.css'
import 'bootstrap/dist/css/bootstrap.css'
import CircleImg from '../img/circles.png'


class Card extends React.Component{

    render(){

        const {title,description,img,leftColor,rightColor} = this.props;

        return (
        
             <div className= "card mx-auto Fitness-Card"        
             style={{
                       backgroundImage: `url(${CircleImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor|| '#2F80ED'}) `
                }} >
                  <div className = "card-body">
                    <div className = "row center"> 
                        <div className = "col-6">
                            <img src = {img} className= "float-right" />
                        </div>

                        <div className="col-6 Fitness-Card-Info"> 
                            <h1>{title}</h1>
                            <p>{description}</p>
                       </div>
                    </div>
                  </div>
              </div>)



    }



}

export default Card;