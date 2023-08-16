import React from "react"
import "../components/event.css"
import TextComponent from "./TextComponent"
import { useState, useEffect } from "react"

const Events = ({ date, month, price, name, info, background }) => {
 
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
    <div className="event-card-container">
     <div className="card-background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="event-card-content">
        
      <div className="event-card-date">
       <TextComponent label={date} weight={"bold"} lineheight={"l13"} size={"h1"}/><br className="no-br"/>
       <TextComponent  label={month}
              weight={"regular"}
              lineheight={"l13"}
              size={"h1"}/>
      </div>
      <div className="event-price">
       <TextComponent  label={`${price}`}
            weight={"bold"}
            lineheight={"l13"}
            size={isSmallScreen ? "h2" : "h1"}/>
      </div>
      <div className="event-info">
      <div className="event-info-text">
       <div className="event-title-name">
       <TextComponent label={name} weight={isSmallScreen ? "bold" : "medium"} lineheight={"l24"} size={isSmallScreen ? "h4" : "h3"}/>
       </div>
       <div className="event-in">
        <TextComponent label={info} weight={"regular"} lineheight={"l22"} size={"h2"}/>
       </div>
    </div>
    </div>
    
    </div>
   </div>
  )
}

export default Events