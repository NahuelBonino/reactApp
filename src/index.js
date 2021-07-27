  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';
  import Card from './components/Card'
  import Welcome from './components/Welcome'


   ReactDOM.render(
    <div> 
        <Welcome
          userName = "Nahuel"      
        />
        <Card 
            title="Technics guides"
            description="Learn amazin among us bla ble bli"
            img = "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
            leftColor="#A74CF2"
            rightColor="#617BFB"
        />

    </div>,   
    document.getElementById('root')
    );


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

