import React from 'react'
import "../Event.css"

function Categories({ categories, onChange}) {
  return (
    <div className='dropdown'>
      <label htmlFor="categories">Explore the upcoming events: </label>
      <select id="categories" onChange={onChange}>
        {categories.map((category) => {
          return (
            <>
              <option key={category.id}>{category.name}</option>
            </>

          )
        })}
      </select>
    </div>
  )
}

export default Categories