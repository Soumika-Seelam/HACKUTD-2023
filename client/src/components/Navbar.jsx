import React from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

export const Navbar = () => {
  return (
    <div className='nav'>
    <img src={Logo} className="logo"/>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chat">Random Session</Link>
      </li>
      <li>
        <Link to="mentors">Mentors</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
    </ul>
  </div>
  )
}
