import React from 'react'
import "../components/button.css"

const Buttons = ({title, selected}) => {
  return (
      <button className={`button-style ${selected ? 'selected' : ''}`}>{title}</button>
  )
}

export default Buttons
