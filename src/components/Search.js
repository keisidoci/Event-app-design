import React from "react"
import "../components/search.css"

const Search = () => {
  return (
    <div className="search-bar-container">
    <div className="searchBar">
      <div className="icon-search">
        <i
          class="fa-solid fa-magnifying-glass"
          style={{ color: "#ffffff" }}
        ></i>
      </div>
        <input type="text" placeholder="Search all events..."className="search"></input>
      <div className="icon-sliders">
      <i class="fa-solid fa-sliders" style={{color: '#ffffff'}}></i>
      </div>
    </div>
    </div>
  )
}

export default Search
