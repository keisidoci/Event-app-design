import React from 'react'
import profilePic from "../assets/profilePic.jpg"
import "../layout/nav.css"

const Nav = () => {
  return (
    <nav>
    <div className='container'>
        <div className='app'>
        <h3 className='appname'><strong>AppName</strong></h3>
         </div>
         <div className='profile-info'>
        <p className='name'>John</p>
        <img src={profilePic} alt='profile' className='profile' />
        </div>
    </div>
  <hr/>
    </nav>
  )
}

export default Nav
