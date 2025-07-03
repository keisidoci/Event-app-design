import React, { useEffect, useState } from "react";
import backIcon from "../assets/backIcon.svg";
import calendar from "../assets/calendar.svg";
import location from "../assets/location.svg";
import ticket from "../assets/ticket.svg";
import "../components/eventInfo.css";
import img2 from "../assets/img2.jpg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EventInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("🚀 ~ EventInfo ~ id:", id);
  const [eventData, setEventData] = useState([]);

  const backgroundImage = {
    backgroundImage: `url(https://d37kvo87lzs6gw.cloudfront.net/assets/img2.jpg)`,
  };

  const handleEventCardClick = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ukfs5ejfcc.execute-api.eu-central-1.amazonaws.com/events/${id}`
        );
        setEventData(response.data);
        console.log("🚀 ~ Response Data:", response);
      } catch (error) {
        console.error("❌ Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="eventInfo-card">
      <div className="bcg-img" style={backgroundImage}>
        <div className="row1">
          <div className="backBtn" onClick={() => handleEventCardClick()}>
            <img src={backIcon} className="back-icon" alt="backIcon"></img>
          </div>
          <div className="concert-name">{eventData.name}</div>
          <div></div>
        </div>
      </div>

      <div className="row2">
        <div className="event-name">
          <div className="dave">{eventData.name}</div>
          <div className="eventPrice">{`${eventData.price}`}</div>
        </div>

        <div className="event-web">
          <div className="calendar">
            <div className="icon">
              <img src={calendar} alt="calendar"></img>
            </div>

            <div className="calendar-month">
              <div className="month">
                <strong>{eventData.date} </strong>
              </div>
            </div>
            <hr className="hr1" />
            <div className="calendar-time">
              <div className="time">
                <strong className="no-strong">{eventData.time} </strong>
              </div>
              {/* <div className="tuesd">Tuesday</div> */}
            </div>
          </div>

          <div className="location">
            <div className="icon2">
              <img src={location} alt="location"></img>
            </div>
            <div className="info">
              <p>Amsterdam, Netherlands</p>
            </div>
          </div>

          <div className="ticket">
            <div className="icon3">
              <img src={ticket} alt="ticket"></img>
            </div>
            <div className="info-ticket">
              <p>{`${eventData.tickets_available} tickets`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="part2">
        <div className="extended-info">
          <h4 className="about">About event</h4>
          <p className="about-text">
            {eventData.about || "No description available for this event."}
          </p>
        </div>
        <div className="buy-ticket">
          <button className="ticketBtn">
            <div>
              <img src={ticket} className="ticketIcon" alt="ticketIcon"></img>
            </div>
            <div className="text-t">Tickets</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
