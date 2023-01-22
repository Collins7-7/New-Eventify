import React from "react";
import "./Popular.css";
import music from "../images/music.jpg";
import tech from "../images/tech.jpg";
import buss from "../images/buss.jpg";

function Popular() {
  return (
    <div className="container grey">
      <div className="row">
        <div className="col-md-12">
          <h3>OUR POPULAR EVENTS</h3>
          <p>
            Eventify is an events company that strives to keep people updated on
            all events happening in Nairobi. With years of experience in the field, we have clients such as large and small corporate businesses and private party organisers. <br /> 
           This has helped us identify our popular events and those that we have the all year round.Our most sort after events are;
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img" src={tech} alt="Banner" />
            <div class="card-body">
              <h5 class="card-title">Tech Summits</h5>
              <p className="card-text ">
                Tech is the future! At Eventify we hook you up with all tech
                related events such as Hackathons.WE have Tech summits quarterly, and this makes it popular!.We give you all the
                information that helps you prepare for tech events. We ensure
                that all tech summits are posted on time to give atendees ample time to prepare.
                Tech events target the local and international companies as well.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img className="card-img" src={buss} alt="Banner" />
            <div className="card-body">
              <h5 className="card-title">Business Expos</h5>
              <p className="card-text ">
                Business? We got you! Eventify helps you sell your business, in
                business events. We ensure to hook you up with the best where
                you can get investors This gives you a networking platform as
                well as marketing.We have business events happen monthly!
                we ensure to post them early enough.
                Business is a major economic factor and having a platform whereone can market themselves and get clients is great
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <img className="card-img" src={music} alt="Banner" />
            <div className="card-body">
              <h5 className="card-title">Music Concerts</h5>
              <p className="card-text ">
                Music events are the most popular events and we list several events every weekend.
                The need for people to attend a good music concert pushes us to get all gigs listed in our app.
                Eventify ensures that you are updated on all your best artist's
                performances. We make sure that all the music event all around
                the year are on our app. This includes making tickets timely so
                you dont miss out. You are welcome.
              </p>
            </div>
          </div>
        </div>
        <div className="port">
          <h3>Our Events Portfolio</h3>
          <p>
            Our portfolio and experiences are vast. However, one fact remains
            true for all our events creating a perfect experience for your
            guests is our top priority. Whatever your event requirements, budget
            or location, Eventify guarantees maximum engagement and an
            unforgettable guest experience.
          </p>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Meetings</li>
                <li>Hybrid & Virtual Events</li>
                <li>Private Dining</li>
                <li>Business EXpos</li>
                <li>Graduation parties</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Christmas & Seasonal Parties</li>
                <li>Awards Ceremonies</li>
                <li>Team Building</li>
                <li>Exhibitions</li>
                <li>Networking Events</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Wellness Occasions</li>
                <li>Corporate Hospitality</li>
                <li>Training Sessions</li>
                <li>Tech Summits</li>
                <li>Hackathons</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-4">
              <ul>
                <li>Event coordination</li>
                <li>Event reporting </li>
                <li>Guest management</li>
                <li>Events Ticketing</li>
                <li>Event rehearsal</li>
              </ul>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
