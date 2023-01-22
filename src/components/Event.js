import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Categories from './Categories'

function Event() {
  const [categories, setCategories] = useState([])
  const [events, setEvents] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Business")

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/categories")
      .then((r) => r.json())
      .then((categories) => setCategories(categories))

  }, [])

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/events")
      .then((r) => r.json())
      .then((events) => setEvents(events))

  }, [])

  function handleChange(event) {
    setSelectedCategory(event.target.value)
  }

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "Business") {
      return true
    } else {
      return event.category.name === selectedCategory;
    }
  })

  return (
    <>
      <Categories categories={categories} onChange={handleChange}/>
      <section className='section'>
        {filteredEvents.map((event) => {
          return (
            <div className='wrapper' key={event.id} >
              <Link to={`/events/${event.id}`}>
                <div className='image-card'>
                  <img src={event.image_url} alt='event-img' className='image'/>
                </div>
              </Link>
              <div className='details'>
                <h4>{event.name}</h4>
                <p>{event.category.description}</p>
                <p>{`Date: ${event.start_date}`}</p>
              </div>                  
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Event