import React from 'react'
import { useNavigate, Link} from 'react-router-dom';
import "./Landingpage.css";


function LandingPage() {

    let navigate=useNavigate();

  return (
    <div className='front-page'>
       
        <div className='front-container'>

            <div className='front-container1'>
                <h2>Welcome to Eventify</h2>
                <p>We make it easier for you to book events on time, save your time, money and get first hand information of the events that are happening within Nairobi.</p>
            <button onClick={() => {navigate ('/login')} } className='land-button'  type='button'>Get Started</button>
            </div>
            <div className='front-container2'>
                <img src='https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?b=1&s=170667a&w=0&k=20&c=agmliZ-KOhHqyPv2AKoL0Gft1A02pEQbE5vOIDCqUU0=' alt='event'/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage;