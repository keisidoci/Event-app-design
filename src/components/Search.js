import React from "react"
import "../components/search.css"

const Search = ({handleCreateEventClick}) => {
  return (
    <div className="search-bar-container">
    <div className="searchBar">
      <div className="icon-search">
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#ffffff" }}
        />
        <input type="text" placeholder="Search all events..."className="search"></input>
      </div>
      <div className="icon-sliders">
      <i class="fa-solid fa-sliders" style={{color: '#ffffff'}}></i>
      </div>
    </div>
    <button className="create-event-btn" onClick={handleCreateEventClick}>
        Create Event
      </button>
    </div>
  )
}

export default Search
