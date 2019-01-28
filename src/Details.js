import React from 'react';

const Details = (props) => {
  return (
    <div className='detailsContainer'>
      <p>{props.title}</p>
      <img 
      src={props.url}
      alt="Images" />
      <p className='detailsPrice'>{props.price}</p>
    </div>
  );
};

export default Details;