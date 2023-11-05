import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='nav'>
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
