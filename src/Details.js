import React from 'react';

const Details = (props) => {
    console.log(props);
  return (
    <div className='detailsContainer'>
      <p>{props.title}</p>
      <img 
      src={props.url}
      alt="Front End Engineer" />
      <p className='detailsPrice'>{props.price}</p>
    </div>
  );
};

export default Details;