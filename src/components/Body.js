import React from "react";
import "../components/body.css";
import Suggestions from "../components/Suggestions";
import Buttons from "./Buttons";
import Events from "./Events";
// import img5 from "https://d37kvo87lzs6gw.cloudfront.net/assets/img5.jpeg"
// import img1 from "../assets/img1.jpg"
// import img2 from "../assets/img2.jpg"
// import img4 from "../assets/img4.jpg"
// import img3 from "../assets/img3.jpg"
import { useNavigate } from "react-router-dom";
import Nav from "../layout/Nav";
import Search from "./Search";
import { useState, useEffect } from "react";
import TextComponent from "./TextComponent";
import axios from "axios";

const buttonsData = ["All", "Free", "Limited", "Concert", "Festival"];
const suggestionData = [
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: "https://d37kvo87lzs6gw.cloudfront.net/assets/img5.jpeg",
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: "https://d37kvo87lzs6gw.cloudfront.net/assets/img1.jpg",
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: "https://d37kvo87lzs6gw.cloudfront.net/assets/img5.jpeg",
  },
  {
    date: "24 Feb",
    time: "19:30",
    title: "Dave - We're all alone in this together UK tour 2022",
    img: "https://d37kvo87lzs6gw.cloudfront.net/assets/img5.jpeg",
  },
];

const Body = () => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState([]);

  const imageLinks = suggestionData.map((suggestion) => suggestion.img);

  const handleEventCardClick = () => {
    navigate(`/Events`);
  };

  const handleCreateEventClick = () => {
    navigate("/create-event");
  };

  const [selectedButton, setSelectedButton] = useState(buttonsData[0]);
  useEffect(() => {
    console.log("selectedButton:", selectedButton);
  }, [selectedButton]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ukfs5ejfcc.execute-api.eu-central-1.amazonaws.com/events"
        );
        setEventData(response.data);
        console.log("🚀 ~ Response Data:", response.data);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      <Nav />
      <Search handleCreateEventClick={handleCreateEventClick} />
      <div className="home">
        <div className="header-section">
          <TextComponent
            label={"Suggested"}
            size={isSmallScreen ? "h4" : "h3"}
            weight={"regular"}
            lineheight={"l24"}
            color={"white"}
          />
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
        <TextComponent
          label={"Upcoming Events"}
          size={isSmallScreen ? "h4" : "h3"}
          weight={"regular"}
          lineheight={"l24"}
          color={"white"}
        />
      </div>
      <div className="button-row">
        {buttonsData.map((title, index) => (
          <Buttons
            title={title}
            key={index}
            selected={selectedButton === title}
            onClick={() => setSelectedButton(title)}
          />
        ))}
      </div>
      <div className="total">
        <TextComponent
          label={"Total events: 150"}
          size={"h1"}
          weight={"regular"}
          lineheight={"l19"}
          color={"gray"}
        />
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
            background={imageLinks[index % imageLinks.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
