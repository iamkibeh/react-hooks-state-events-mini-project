import React from 'react'
import CategoryFilter from './CategoryFilter'

function Task(props) {
  const { text, category, removeTask } = props

  return (
    <div className='task'>
      <div className='label'>{category}</div>
      <div className='text'>{text}</div>
      <button className='delete' onClick={() => removeTask(text)}>
        Delete
      </button>
    </div>
  )
}

export default Task
