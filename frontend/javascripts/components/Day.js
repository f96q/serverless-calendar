import React from 'react'
import uuid from 'uuid/v4'
import Event from './Event'
import { TableRowColumn } from 'material-ui/Table'
import { red50, red500 } from 'material-ui/styles/colors'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ToggleStar from 'material-ui/svg-icons/toggle/star'
import Badge from 'material-ui/Badge';

const Day = ({weekIndex, dayIndex, day, addEvent, removeEvent}) => {
  if (!day) {
    return (
      <TableRowColumn></TableRowColumn>
    )
  }
  const events = day.events.map((event) => {
    return (<Event key={event.id} weekIndex={weekIndex} dayIndex={dayIndex} removeEvent={removeEvent} {...event}/>)
  })
  const add = () => {
    const value = prompt()
    if (!value) return
    addEvent(weekIndex, dayIndex, {id: uuid(), title: value})
  }
  const today = () => {
    if (day.today) {
      return (<Badge badgeContent={day.day} secondary={true} badgeStyle={{right: 30, top: 5}} />)
    } else {
      return (<Badge badgeContent={day.day} primary={true} badgeStyle={{right: 30, top: 5}} />)
    }
  }
  return (
    <TableRowColumn onClick={add} style={{backgroundColor: (day.weekend || day.holiday) ? red50 : null}}>
      {today()}
      <div style={{height: 150}}>{events}</div>
    </TableRowColumn>
  )
}

export default Day
