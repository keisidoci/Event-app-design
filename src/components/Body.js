import React from "react"
import "../components/body.css"
import Suggestions from "../components/Suggestions"
import Buttons from "./Buttons"
import Events from "./Events"
import img5 from "../assets/img5.jpeg"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img4 from "../assets/img4.jpg"
import img3 from "../assets/img3.jpg"
import { useNavigate } from "react-router-dom"
import Nav from "../layout/Nav"
import Search from "./Search"



const buttonsData = ["All", "Free", "Limited", "Concert", "Festival"];
const suggestionData = [
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: img5,
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: img1,
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: img5,
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: img5,
  }
];

const eventData = [
  {
    date: "02",
    month: "Sep",
    price: "$45.00",
    name: "Dave",
    info: "Amsterdam, Netherlands - 10:00 PM",
    background: img2,
  },
  {
    date: "02",
    month: "Sep",
    price: "$45.00",
    name: "Dave - We're all alone in this together UK tour 2022",
    info: "Amsterdam, Netherlands - 10:00 PM",
    background: img4,
  },
  {
    date: "02",
    month: "Sep",
    price: "$45.00",
    name: "Dave - We're all alone in this together UK tour 2022",
    info: "Amsterdam, Netherlands - 10:00 PM",
    background: img3,
  },
];

const Body = () => {
  const navigate = useNavigate();

  const handleEventCardClick = () => {
        navigate(`/Events`);
  };
  
  return (
    <div className="body">
      <Nav/>
      <Search/>
    <div className="home">
      <p>Suggested</p>
      </div>
      <div className="card-row">
  {suggestionData.map((suggestion, index) => (
    <Suggestions
      key={index}
      date={suggestion.date}
      time={suggestion.time}
      title={suggestion.title}
      img={suggestion.img}
    />
  ))}
</div>

      <div >
      <h4 className="event">Upcoming events</h4>
      </div>
      <div className="button-row">
          {buttonsData.map((title, index) => (
            <Buttons title={title} key={index} selected={index === 0}/>
          ))}
        </div>
      <div >
      <p className="total">Total events: 150</p>
      </div>
      <div className="event-component" onClick={() => handleEventCardClick()}>
  {eventData.map((event, index) => (
    <Events
      key={index}
      date={event.date}
      month={event.month}
      price={event.price}
      name={event.name}
      info={event.info}
      background={event.background}
    />
  ))}
</div>

    </div>
  )
}

export default Body
