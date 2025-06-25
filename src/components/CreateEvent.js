import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateEvent.css";
import img2 from "../assets/img2.jpg";
import backIcon from "../assets/backIcon.svg";
import "../components/eventInfo.css";

function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    ticketPrice: "",
    tickets_available: "",
  });

  const [errors, setErrors] = useState({
    ticketPrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "ticketPrice") {
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        if (errors.ticketPrice) {
          setErrors((prev) => ({
            ...prev,
            ticketPrice: "",
          }));
        }
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.ticketPrice && isNaN(parseFloat(formData.ticketPrice))) {
      newErrors.ticketPrice = "Please enter a valid number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const postData = {
      name: formData.title,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      about: formData.description,
      tickets_available: parseInt(formData.tickets_available, 10),
      price: `$${parseFloat(formData.ticketPrice).toFixed(2)}`,
    };

    try {
      const res = await axios.post(
        "https://ukfs5ejfcc.execute-api.eu-central-1.amazonaws.com/events",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("✅ Event created:", res.data);
      navigate("/");
    } catch (err) {
      console.error("❌ Error creating event:", err);
    }
  };

  const backgroundImage = {
    backgroundImage: `url(${img2})`,
  };

  const handleEventCardClick = () => {
    navigate("/");
  };

  return (
    <div className="eventInfo-card">
      <div className="bcg-img" style={backgroundImage}>
        <div className="row1">
          <div className="backBtn" onClick={handleEventCardClick}>
            <img src={backIcon} className="back-icon" alt="backIcon" />
          </div>
          <div className="concert-name">Create New Event</div>
          <div></div>
        </div>
      </div>

      <div className="create-event-container">
        <form onSubmit={handleSubmit} className="create-event-form">
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="ticketPrice">Ticket Price ($)</label>
            <input
              type="text"
              id="ticketPrice"
              name="ticketPrice"
              value={formData.ticketPrice}
              onChange={handleChange}
              placeholder="0.00"
              required
            />
            {errors.ticketPrice && (
              <span className="error-message">{errors.ticketPrice}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="tickets_available">Tickets Available</label>
            <input
              type="number"
              id="tickets_available"
              name="tickets_available"
              value={formData.tickets_available}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button">
              Create Event
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
