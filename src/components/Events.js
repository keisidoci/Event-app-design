import React from "react";
import "../components/event.css";
import TextComponent from "./TextComponent";
import { useState, useEffect } from "react";

const Events = ({ date, month, price, name, info, background, onClick }) => {
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
    <div className="event-card-container" onClick={onClick}>
      <div
        className="card-background"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="event-card-content">
        {/* <div className="event-card-date"> */}
        <TextComponent
          label={date}
          weight={"bold"}
          style={{
            whiteSpace: "nowrap",
            padding: 10,
            background: "linear-gradient(#2C2C2C66,#72727200)",
            borderRadius: 20,
            position: "absolute",
            top: window.innerWidth < 760 ? "unset" : 84,
            left: window.innerWidth < 760 ? "unset" : 180,
            bottom: window.innerWidth < 760 ? 12 : "unset",
            zIndex: window.innerWidth < 760 ? 999 : "unset",
            marginLeft: window.innerWidth < 760 ? 8 : 0,
          }}
          lineheight={"l13"}
          size={"h1"}
        />
        {/* </div> */}
        <div className="event-price">
          <TextComponent
            label={`${price}`}
            weight={"bold"}
            lineheight={"l13"}
            size={isSmallScreen ? "h2" : "h1"}
          />
        </div>
        <div className="event-info">
          <div className="event-info-text">
            <div className="event-title-name">
              <TextComponent
                label={name}
                weight={isSmallScreen ? "bold" : "medium"}
                lineheight={"l24"}
                size={isSmallScreen ? "h4" : "h3"}
              />
            </div>
            <div className="event-in">
              <TextComponent
                label={info}
                weight={"regular"}
                lineheight={"l22"}
                size={"h2"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
