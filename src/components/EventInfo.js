import React from 'react'
import backIcon from "../assets/backIcon.svg"
import calendar from "../assets/calendar.svg"
import location from '../assets/location.svg'
import ticket from "../assets/ticket.svg"
import "../components/eventInfo.css"
import img2 from "../assets/img2.jpg"
import { useNavigate } from "react-router-dom"

const EventInfo = () => {
    const backgroundImage = {
        backgroundImage: `url(https://d37kvo87lzs6gw.cloudfront.net/assets/img2.jpg)`,
    }
    const navigate = useNavigate();

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
                        Dave
                    </div>
                    <div></div>
        </div>
    </div>

            <div className='row2'>

                <div className='event-name'>
                    <div className='dave'>
                        Dave
                    </div>
                    <div className='eventPrice'>
                        $45.00
                    </div>
                </div> 
        
                <div className='event-web'>
                <div className='calendar'>
                    <div className='icon'><img src={calendar} alt='calendar'></img></div>
                 
                        <div className='calendar-month'>
                    <div className='month'><strong>02 </strong></div>
                    <div className='sep'>September </div>
                    </div>
                    <hr className='hr1'/>
                    <div className='calendar-time'>
                    <div className='time'><strong className='no-strong'>10:00 PM </strong></div>
                    <div className='tuesd'>Tuesday</div>
                    </div>
                   
                </div>

                <div className='location'>
                <div className='icon2'><img src={location} alt='location'></img></div>
                    <div className='info'><p>Amsterdam, Netherlands</p></div>
                </div>

                <div className='ticket'>
                <div className='icon3'><img src={ticket} alt='ticket'></img></div>
                <div className='info-ticket'><p>5 tickets</p></div>
                </div>
              </div>

            </div>    
       
        <div className='part2'>
            <div className='extended-info'>
            <h4 className='about'>About event</h4>
            <p className='about-text'>Lorem ipsum dolor sit amet. Ea nobis corporis ad fugiat culpa ut quibusdam soluta aut aliquid saepe. 
            Est explicabo neque aut molestiae doloribus At fugiat ipsum non cupiditate soluta sed dolorem asperiores aut quia perferendis sed possimus officiis.</p>
            </div>
            <div className='buy-ticket'>
                    <button className='ticketBtn'>
                        <div>
                            <img src={ticket} className='ticketIcon' alt='ticketIcon'></img>
                        </div>
                        <div className='text-t'>
                            Tickets
                        </div>
                    </button>
            </div>
        </div>

   </div>
  )
}

export default EventInfo