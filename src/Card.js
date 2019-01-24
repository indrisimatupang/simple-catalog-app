import React from 'react';
import './App.css';

const Card = (props) => {
    console.log(props);
  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <img 
                src={props.url}
                alt="Front End Engineer" />
                <p>{props.title}</p>
            </div>
            <div className='card'>
                <img 
                src={props.url}
                alt="Front End Engineer" />
                <p>{props.title}</p>
            </div>
            <div className='card'>
                <img 
                src={props.url}
                alt="Front End Engineer" />
                <p>{props.title}</p>
            </div>
        </div>
    </div>
  );
};

export default Card;