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
import { useState, useEffect } from "react"
import TextComponent from "./TextComponent"



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

  const handleCreateEventClick = () => {
    navigate('/create-event');
  };

  const [selectedButton, setSelectedButton] = useState(buttonsData[0]);
  useEffect(()=>{
    console.log("selectedButton:", selectedButton);
  },[selectedButton])

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
    <div className="body">
      <Nav/>
      <Search handleCreateEventClick={handleCreateEventClick}/>
    <div className="home">
    <div className="header-section">
      <TextComponent label={"Suggested"} size={isSmallScreen ? "h4" : "h3"} weight={"regular"} lineheight={"l24"} color={"white"}/>
    </div>
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

      <div className="event">
      <TextComponent label={"Upcoming Events"} size={isSmallScreen ? "h4" : "h3"} weight={"regular"} lineheight={"l24"} color={"white"}/>
      </div>
      <div className="button-row">
          {buttonsData.map((title, index) => (
            <Buttons title={title} key={index} selected={selectedButton === title}
            onClick={() => setSelectedButton(title)}/>
          ))}
        </div>
      <div className="total">
      <TextComponent label={"Total events: 150"} size={"h1"} weight={"regular"} lineheight={"l19"} color={"gray"}/>
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
