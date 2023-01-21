import React from 'react'
import { Link } from 'react-router-dom'


function Navbar({user}) {
  return (
    <div className='navbar'>
        <span className='logo'>
          <Link className='link' to="/">Klaus App</Link>
          </span>{
            user ? (
        <ul className='list'>
            <li className="listItem">
                <img src="https://media.distractify.com/brand-img/11jQC6/0x0/cover-google-5-1529441369102.jpg" 
                alt="logo" className="avatar" />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Logout</li>
        </ul>
        ) : (<Link className="link" to="login">Login</Link>)
        }
    </div>
  )
}

export default Navbar