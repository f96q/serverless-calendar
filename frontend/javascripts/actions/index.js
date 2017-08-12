export const nextMonth = () => {
  return {
    type: 'NEXT_MONTH'
  }
}

export const currentMonth = () => {
  return {
    type: 'CURRENT_MONTH'
  }
}

export const prevMonth = () => {
  return {
    type: 'PREV_MONTH'
  }
}

export const addEvent = (weekIndex, dayIndex, event) => {
  return {
    type: 'ADD_EVENT',
    weekIndex: weekIndex,
    dayIndex: dayIndex,
    event: event
  }
}

export const removeEvent = (weekIndex, dayIndex, id) => {
  return {
    type: 'REMOVE_EVENT',
    weekIndex: weekIndex,
    dayIndex: dayIndex,
    id: id
  }
}
