import React from "react";
import "../Popular.css";
import music from "../images/music.jpg";
import tech from "../images/techi.jpg";
import buss from "../images/biz.jpg";

function Popular() {
  return (
    <div className='aboutus-main-container'>
      <div className='about-eventify-conatiner'>
        <div className='about-eventify-hero-section'>
          <div className='about-eventify-header'>
            <h2>Our Events Portfolio</h2>
            <p>
            Eventify is an events company that strives to keep people updated on
            all events happening in Nairobi. With years of experience in the field, we have clients such as large and small corporate businesses and private party organisers. <br /> 
           This has helped us identify our popular events and those that we have the all year round.Our most sort after events are;
            </p>
          </div>
          <div className='about-eventify-cards'>
            <div className='about-eventify-card'>
              <img className='card-img-top' src={tech} alt='Banner' />
              <div class='card-body'>
                <h3 class='card-title'>Tech Summits</h3>
                <p className='card-text '>
                Tech is the future! At Eventify we hook you up with all tech
                related events such as Hackathons.WE have Tech summits quarterly, and this makes it popular!.We give you all the
                information that helps you prepare for tech events.
                </p>
              </div>
            </div>

            <div className='about-eventify-card'>
              <img className='card-img-top' src={buss} alt='Banner' />
              <div className='card-body'>
                <h3 className='card-title'>Business Expos</h3>
                <p className='card-text '>
                Business? We got you! Eventify helps you sell your business, in
                business events. We ensure to hook you up with the best where
                you can get investors This gives you a networking platform as
                well as marketing.We have business events happen monthly!
                </p>
              </div>
            </div>

            <div className='about-eventify-card'>
              <img className='card-img-top' src={music} alt='Banner' />
              <div className='card-body'>
                <h3 className='card-title'>Music Concerts</h3>
                <p className='card-text '>
                Music events are the most popular events and we list several events every weekend.
                The need for people to attend a good music concert pushes us to get all gigs listed in our app.
                Eventify ensures that you are updated on all your best artist's
                performances.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='events-portfolio-container'>
          <h2>Work with us</h2>
          <p>
            Our portfolio and experiences are vast. However, one fact remains
            true for all our events creating a perfect experience for your
            guests is our top priority. Whatever your event requirements, budget
            or location, Eventify guarantees maximum engagement and an
            unforgettable guest experience.
          </p>
          <div className='event-portfolio-lists'>
            <div className='event-portfolio-list-card'>
              <ul>
                <li>
                  <span>》</span>Meetings
                </li>
                <li>
                  <span>》</span>Hybrid & Virtual Events
                </li>
                <li>
                  <span>》</span>Private Dining
                </li>
                <li>
                  <span>》</span>Drinks Receptions
                </li>
                <li>
                  <span>》</span>Graduation parties
                </li>
              </ul>
            </div>
            <div className='event-portfolio-list-card'>
              <ul>
                <li>
                  {' '}
                  <span>》</span>Christmas & Seasonal Parties
                </li>
                <li>
                  {' '}
                  <span>》</span>Awards Ceremonies
                </li>
                <li>
                  {' '}
                  <span>》</span>Team Building
                </li>
                <li>
                  {' '}
                  <span>》</span>Exhibitions
                </li>
                <li>
                  {' '}
                  <span>》</span>Networking Events
                </li>
              </ul>
            </div>
            <div className='event-portfolio-list-card'>
              <ul>
                <li>
                  {' '}
                  <span>》</span>Wellness Occasions
                </li>
                <li>
                  {' '}
                  <span>》</span>Corporate Hospitality
                </li>
                <li>
                  {' '}
                  <span>》</span>Training Sessions
                </li>
                <li>
                  {' '}
                  <span>》</span>Launch Events
                </li>
                <li>
                  {' '}
                  <span>》</span>Private Functions
                </li>
              </ul>
            </div>
            <div className='event-portfolio-list-card'>
              <ul>
                <li>
                  {' '}
                  <span>》</span>Event coordination
                </li>
                <li>
                  {' '}
                  <span>》</span>Event reporting{' '}
                </li>
                <li>
                  {' '}
                  <span>》</span>Guest management
                </li>
                <li>
                  {' '}
                  <span>》</span>Events Ticketing
                </li>
                <li>
                  {' '}
                  <span>》</span>Event rehearsal
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
export default Popular;
