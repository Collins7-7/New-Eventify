import React from 'react'
import '../About.css'

function About() {
  return (
    <>
    {/* <div className='contactus'>
        <h1>Our Services</h1>
    </div> */}
    
    <div className='about-section'>
        <div className='service-section1'>
            <h2>Make it into a special event</h2>
            <p>We are events company committed to connecting you with various types of events, both hybrid and virtual occasions or celebrations.<br/> 
               We work closely with event organizers to deliver exceptional occasions that best represent you, your company or your brand. 
            </p>
            <h3>Just think of us as an expert extension of your team.</h3> 
        </div>
        <div className='section1-image'>
            <img src='https://media.istockphoto.com/id/1342849839/photo/beautiful-afro-woman-with-pigtails-and-stylish-clothes.jpg?b=1&s=170667a&w=0&k=20&c=RV0HexrtzJmjLsHSWMpPBvyiBdJvTapc5ReUvqtSYwQ=' alt=''/>
        </div>
    </div>
        <div className='card-heading'>
            <h2>What we Offer</h2>
        </div>
<div className='about-card'>
    <div className="cards">
            {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1134373720/photo/start-up-meeting-in-co-working-office.jpg?s=612x612&w=0&k=20&c=PeJ0Xy_-ol1SWvPPe-cakgp8HfSwrCnQ2pzWovNB6F0=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Event Management</h4>
              <p className="card-text ">
                Experience a dedicated end-to-end service. Offering the best event management within the city, get tickets and get to attend events considered highly in the market </p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>

          <div className="cards">
            {/* <img className="card-img-top" src="https://media.istockphoto.com/id/1188426468/photo/planning-a-trip-through-hotel-booking-application.jpg?b=1&s=170667a&w=0&k=20&c=8npicGP_KmiPkkG1tq-dWlvWhTHZ4WG7_9rowgS-Y0M=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Online Booking</h4>
              <p className="card-text ">
              Performing online registrations and check ins of events. Clients are able to decide on which event they want to attend and make thier bookings before the events' deadline </p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>

          <div className="cards">
            {/* <img className="card-img-top" src="https://media.istockphoto.com/id/625222370/photo/audience-applauding-in-the-theater.jpg?s=612x612&w=0&k=20&c=4mz7j4km5-QfVTTWkdcmWYloy2Kjd8Ay2D_-Log_OCc=" alt="" /> */}
            <div className="card-body">
              <h4 className="card-title">Event Listing</h4>
              <p className="card-text ">
              Eventify provides available events as soon as they are annnounced. All out-dated events are no longer displayed in the website to enable our clients access only up to date events </p>
            </div>
            <button type='button' className='about-button'>Learn More</button>
          </div>
    </div>

    

    <div className='card-heading'>
            <h2>Our Team</h2>
        </div>
    <div className='team'>
        <div className='team1'>
            <img alt="" src='https://media.istockphoto.com/id/1355030294/photo/shot-of-a-young-businesswoman-using-a-laptop-and-having-coffee-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=OFiamdRIkX7uIUzMg6jCA-ZgOtLgCXIj1fRvIPdHfMc='/>
            <img alt="" src='https://media.istockphoto.com/id/1371553731/photo/portrait-of-a-young-businessman-using-a-headset-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=gfn9mVWijMJFNPRdzDNZExnvC6qBOkeeol9oJGpEfSM='/>
            <img alt="" src='https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI='/>
        </div>
    </div>
    </>
  )
}

export default About