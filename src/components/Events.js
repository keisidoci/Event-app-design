import React from "react"
import "../components/event.css"

const Events = ({ date, month, price, name, info, background }) => {
 
  return (
    <div className="event-card-container">
     <div className="card-background" style={{ backgroundImage: `url(${background})` }}></div>
      <div className="event-card-content">
        
      <div className="event-card-date">
        <p>{date} <br className="no-br" />{month}</p>
      </div>
      <div className="event-price">
        <p>{price}</p>
      </div>
      <div className="event-info">
      <div className="event-info-text">
        <h4 className="event-title-name">{name}</h4>
        <p className="event-in">{info}</p>
    </div>
    </div>
    
    </div>
   </div>
  )
}

export default Events
