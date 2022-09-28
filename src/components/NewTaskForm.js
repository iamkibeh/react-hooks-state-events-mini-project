import React, { useState } from 'react'

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [data, setData] = useState({ text: '', category: 'code' })
  let filteredList = categories
    .filter((category) => {
      return category !== 'All'
    })
    .map((category) => {
      return (
        <option value={category} key={category}>
          {category}
        </option>
      )
    })

  return (
    <form
      className='new-task-form'
      onSubmit={(e) => {
        e.preventDefault()
        onTaskFormSubmit(data)
        setData({ text: '', category: 'code' })
      }}
    >
      <label>
        Details
        <input
          type='text'
          name='text'
          value={data.text}
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, text: e.target.value }))
          }
        />
      </label>
      <label>
        Category
        <select
          name='category'
          onChange={(e) =>
            setData((prevState) => ({ ...prevState, category: e.target.value }))
          }
        >
          {/* render <option> elements for each category here */}
          {filteredList}
        </select>
      </label>
      <input type='submit' value='Add task' />
    </form>
  )
}

export default NewTaskForm
