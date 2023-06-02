import React from 'react'
import '../css/Button.css'

const Button = ({text, buttonClick, manageClick}) => {
  return (
    <button
        className={buttonClick ? 'button-click' : 'button-reset'}
        onClick={manageClick}>
        {text}
    </button>
  );
}

export default Button