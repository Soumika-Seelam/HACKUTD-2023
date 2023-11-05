import React from 'react'
import './Card.css'
import profile from '../assets/ElonMusk.jpg'
import {useNavigate} from 'react-router-dom'


export const Card = (props) => {
    const navigate = useNavigate()
    const navigateToChat = () => {
        navigate('/chat')
    }
  return (
    <div className='upc'>
        <div className="cardbg"></div>
        <div className="profile-down">
            <img src={props.image} alt = {props.name}/>
            <div className="profile-title">{props.name}</div><br/>
            <div className="profile-description">{<p>{props.bio}</p>}
            </div><br/>
            <div className="button" onClick={navigateToChat}>Chat with me!</div>
        </div>
    </div>
  )
}

