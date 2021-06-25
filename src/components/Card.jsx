import React from 'react';
import './Card.css'

const Card = ({ lang, url }) => {
    return (
        <div className="card">
            <img src= { url } alt="lang.svg" />
            <h3>{ lang }</h3>
        </div>
    )
}

export default Card
