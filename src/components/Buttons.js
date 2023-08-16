import React from 'react'
import "../components/button.css"

const Buttons = ({title, selected, onClick}) => {
  return (
      <button className={`button-style ${selected ? 'selected' : ''}`} onClick={onClick}>{title}</button>
  )
}

export default Buttons
