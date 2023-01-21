import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "../Event.css"

function Eventdetails() {
  const { id }  = useParams();
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/v1/events/${id}`)
    .then((r) => r.json())
    .then((event) => setEvent(event))

  }, [])

  return (
    <div className='container-1'>
      <div>
        <h2>{event.name}</h2>
        <h3>{event.description}</h3>
        <div className="event-image">
          <img src={event.image_url} alt={event.name} className="image"/>
        </div>
        <h4>{`Happening at ${event.location} `}</h4>
        <p>{`On  ${event.start_date}  to  ${event.end_date}`}</p>
      </div>
      <div>
        <h4>{`Total tickets: ${event.total_tickets}`}</h4>
        <h4>{`Remaininng tickets: ${event.remaining_tickets}`}</h4>
        <h4>{`Amount: ${event.amount}`}</h4>
        <button className='ticket-btn'>Buy Ticket</button>
      </div>
    </div>
  )
}

export default Eventdetails