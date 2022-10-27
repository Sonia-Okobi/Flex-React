import React from 'react'
import './index.scss'

export default function Card({image, alternative, header, description, authorimage, authoralternative, author, date}) {
  return (
    <div className='base-card card-container'>
        <div className="card-container__image">
            <img src={image} alt={alternative} />
        </div>
        <div className="card-container__text">
            <h3>{header}</h3>
            <p>{description}</p>
            <div className="author">
                <img className='author__avatar' src={authorimage} alt={authoralternative} />
                <h4>{author}</h4>
                <h5>{date}</h5>
            </div>
        </div>
    </div>
  )
}
