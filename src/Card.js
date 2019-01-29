import React from 'react';
import './css/Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img 
      src={props.url}
      alt="Front End Engineer" />
      <p className='title'>{props.title}</p>
      <p className='price'>{props.price}</p>
    </div>
  );
};

export default Card;