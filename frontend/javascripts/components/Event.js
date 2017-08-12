import React from 'react'

const Event = ({weekIndex, dayIndex, id, title, removeEvent}) => {
   const remove = (e) => {
    e.stopPropagation()
    removeEvent(weekIndex, dayIndex, id)
  }
  return (
    <div>
      <span>{title}</span>
      <span onClick={remove} style={{marginLeft: 5}}>X</span>
    </div>
  )
}

export default Event
