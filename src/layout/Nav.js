import React from 'react'
import profilePic from "../assets/profilePic.jpg"
import "../layout/nav.css"
import TextComponent from '../components/TextComponent'
import { useState, useEffect } from 'react'

const Nav = () => {
  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav>
    <div className='container'>
        <div className='app'>
      <TextComponent  label={"EventApp"}
            weight={"bold"}
            size={"h4"}
            lineheight={"l27"}
            color={"white"}/>
         </div>
         <div className='profile-info'>
       <TextComponent label={"John"}
              weight={"regular"}
              size={isSmallScreen ? "h3" : "h2"}
              lineheight={"l22"}
              color={"white"}/>
        <img src={profilePic} alt='profile' className='profile' />
        </div>
    </div>
  <hr/>
    </nav>
  )
}

export default Nav
