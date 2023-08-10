import React from 'react'
import "../components/suggest.css"


function Suggestions({date,time, title, img}) {
  return (
    <div className='card-component'>
    <div className='card'>
      <img src={img} className='background'/>
      <h6 className='date'>{date}-{time}</h6>
      <h4 className='title'>{title}</h4>
      <a href=''><button className='button'>Tickets</button></a> 
    </div>
    </div>
  )
}

export default Suggestions
