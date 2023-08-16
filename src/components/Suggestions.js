import React from 'react'
import "../components/suggest.css"
import TextComponent from './TextComponent'

function Suggestions({date,time, title, img}) {
  return (
    <div className='card-component'>
    <div className='card'>
      <img src={img} className='background'/>
     <div className='date'>
      <TextComponent  label={`${date} - ${time}`}
            weight={"regular"}
            lineheight={"l19"}
            size={"h1"}
            color={"white"}/>
     </div>
      <div className='title'>
        <TextComponent label={title} weight={"bold"} lineheight={"l24"} size={"h3"} color={"white"}/>
      </div>
     <button className='button'><TextComponent  label={"Tickets"}
          weight={"regular"}
          lineheight={"l22"}
          size={"h2"}
          color={"white"}/>
          </button>
    </div>
    </div>
  )
}

export default Suggestions
