import React, { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import "../Event.css"

function Eventdetails() {
  const { id }  = useParams();
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch(`https://eventify-app.onrender.com/api/v1/events/${id}`)
    .then((r) => r.json())
    .then((event) => setEvent(event))

  }, [id])

  return (
    <div className='container-1'>
      <div className='tickets-2'>
        <h2>{event.name}</h2>
        <div className="event-image">
          <img src={event.image_url} alt={event.name} className="image"/>
        </div>
        <div className='description'>
          <h3>{`Description: ${event.description}`}</h3>
          <h4>{`Event Location: ${event.location} `}</h4>
          <p>{`Start date:  ${event.start_date}`}</p> 
          <p>{`End date:  ${event.end_date}`}</p>
        </div>
      </div>
      <div className='tickets-1'>
        <h4>{`Total tickets: ${event.total_tickets}`}</h4>
        <h4>{`Remaining tickets: ${event.remaining_tickets}`}</h4>
        <h4>{`Amount: ${event.amount}`}</h4>
        <Link to={`/events/${event.id}/book_event`}>
          <button className='ticket-btn'>Buy Ticket</button>
        </Link>
      </div>
    </div>
  )
}

export default Eventdetails