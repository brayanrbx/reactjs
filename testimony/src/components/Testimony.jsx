import React from 'react';

function Testimony(props) {
  return (
    <div className="container-testimony">
      <img src={props.img} alt='emma photo' className='img-testimony' />

      <div className="container-testimony-text">
        <p className='testimony-name'>{props.name} in {props.country}</p>
        <p className='testimony-job'>{props.job} in {props.company}</p>
        <p className='testimony-text'>"{props.text}"</p>
      </div>
    </div>
  );
};

export default Testimony;