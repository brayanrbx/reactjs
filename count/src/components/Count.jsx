import React from 'react'
import '../css/Count.css'

function Count({ numClick }) {
    return (
        <div className='count'>
            <p>{numClick}</p>
        </div>
    );
}

export default Count;