import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';
import img2 from "../assets/img2.jpg"
import backIcon from "../assets/backIcon.svg"
import "../components/eventInfo.css"


function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    ticketPrice: '',
  });

  const [errors, setErrors] = useState({
    ticketPrice: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'ticketPrice') {
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
        if (errors.ticketPrice) {
          setErrors(prev => ({
            ...prev,
            ticketPrice: ''
          }));
        }
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.ticketPrice && isNaN(parseFloat(formData.ticketPrice))) {
      newErrors.ticketPrice = 'Please enter a valid number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Event Data:', formData);
      navigate('/');
    }
  };


    const backgroundImage = {
        backgroundImage: `url(${img2})`,
    }

  const handleEventCardClick = () => {
        navigate(`/`);
  };
  
  return (
    <div className='eventInfo-card'>

    <div className='bcg-img' style={backgroundImage}>
        <div className='row1'>
                    <div className='backBtn' onClick={() => handleEventCardClick()}>
                       <img src={backIcon} className="back-icon" alt='backIcon'></img>
                    </div>
                    <div className='concert-name'>
                        Create New Event
                    </div>
                    <div></div>
        </div>
    </div>

            {/* <div className='row2'> */}

    <div className="create-event-container">
        {/* <h2>Create New Event</h2> */}
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
            <button type="submit" className="submit-button">Create Event</button>
            <button type="button" className="cancel-button" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
            {/* </div> */}


   </div>
  )
}

export default CreateEvent; 