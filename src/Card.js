import React from 'react';
import './App.css';

const Card = (props) => {
    console.log(props);
  return (
    <div className='card'>
      <img 
      src={props.url}
      alt="Front End Engineer" />
      <p><b>{props.title}</b></p>
      <p>{props.price}</p>
  </div>
  );
};

export default Card;