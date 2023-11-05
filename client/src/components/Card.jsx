import React from 'react'
import './Card.css'
import profile from '../assets/ElonMusk.jpg'

export const Card = (props) => {
  return (
    <div className='upc'>
        <div className="cardbg"></div>
        <div className="profile-down">
            <img src={props.image} alt = {props.name}/>
            <div className="profile-title">{props.name}</div><br/>
            <div className="profile-description">{<p>{props.bio}</p>}
            </div><br/>
            <div className="button">Chat with me!</div>
        </div>
    </div>
  )
}

