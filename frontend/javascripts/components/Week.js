import React from 'react'
import Day from './Day'
import { TableRow } from 'material-ui/Table'

const Week = ({weekIndex, week, addEvent, removeEvent}) => {
  const days = week.map((day, index) => {
    return (<Day key={index} weekIndex={weekIndex} dayIndex={index} day={day} addEvent={addEvent} removeEvent={removeEvent} />)
  })
  return (<TableRow>{days}</TableRow>)
}

export default Week
