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
        backgroundImage: `url(${img2})`,
    }
    const navigate = useNavigate();

  const handleEventCardClick = () => {
        navigate(`/`);
  };
  
  return (
    <div className='eventInfo-card'>

        <div className='part1'>
            
            <div className='bcg-img' style={backgroundImage}>
                <div className='row1'>
                    <div className='backBtn' onClick={() => handleEventCardClick()}>
                       <img src={backIcon} className="back-icon"></img>
                    </div>
                    <div className='concert-name'>
                        <h3>Dave</h3>  
                    </div>
                </div>
            </div>

            <div className='row2'>

                <div className='event-name'>
                    <div className='dave'>
                        <h3>Dave</h3>
                    </div>
                    <div className='eventPrice'>
                        <p>$45.00</p>
                    </div>
                </div> 
        
                <div className='event-web'>
                <div className='calendar'>
                    <div className='icon'><img src={calendar}></img></div>
                    <div className='month'><strong>02 </strong><br className='br'/>September</div>
                    <hr className='hr1'/>
                    <div className='time'><p><strong className='no-strong'>10:00 PM </strong><br className='br'/>Tuesday</p></div>
                </div>

                <div className='location'>
                <div className='icon2'><img src={location}></img></div>
                    <div className='info'><p>Amsterdam, Netherlands</p></div>
                </div>

                <div className='ticket'>
                <div className='icon3'><img src={ticket}></img></div>
                <div className='info-ticket'><p>5 tickets</p></div>
                </div>
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
                    <img src={ticket} className='ticketIcon'></img>
                </div>
                <div className='text-t'>
                    <p>Tickets</p>
                </div>
                </button>
            </div>
        </div>

   </div>
  )
}

export default EventInfo