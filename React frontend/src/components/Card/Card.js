import React from 'react'
import './Card.css';

const Card = ({ image, heading, para }) => {
    return (
        <div className="card">
            <img alt="hello" src={image} />
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
    )
}

export default Card
