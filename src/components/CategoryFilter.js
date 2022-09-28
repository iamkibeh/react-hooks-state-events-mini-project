import React, { useState } from 'react'
import { TASKS } from '../data'

function CategoryFilter({
  categories,
  tasks,
  myFilteredList,
  selectedCategory,
  setSelectedCategory,
}) {
  function handleClick(item) {
    setSelectedCategory(item)
    const newData =
      item === 'All' ? TASKS : tasks.filter((task) => task.category === item)
    myFilteredList(newData)
  }

  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((elem) => {
        const className = elem === selectedCategory ? 'selected' : null

        return (
          <button
            key={elem}
            onClick={() => handleClick(elem)}
            className={className}
          >
            {elem}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
