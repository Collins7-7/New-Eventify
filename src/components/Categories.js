import React from 'react'
import "../Event.css"

function Categories({ onChange}) {
  return (
    <div className='dropdown'>
      <label htmlFor="categories">Explore the upcoming events: </label>
      <select id="categories" onChange={onChange}>
        <option>Categories</option>
        <option>Business</option>
        <option>Technology</option>
        <option>Art Workshops</option>
        <option>Sports</option>
        <option>Music Concerts</option>
        <option>Community</option>
      </select>
    </div>
  )
}

export default Categories