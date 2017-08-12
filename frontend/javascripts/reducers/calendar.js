import moment from 'moment'
import holiday from 'holiday-jp'

const isHoliday = (date) => {
  return holiday.isHoliday(date.toDate())
}

const isToday = (now, date) => {
  return now.isSame(date, 'day')
}

const isWeekend = (wday) => {
  return (wday == 0 || wday == 6)
}

const getWeeks = (currentDate) => {
  const now = moment()
  const year = currentDate.year()
  const month = currentDate.month()
  const startWday = currentDate.startOf('month').day()
  const lastDate = currentDate.endOf('month').date()
  const weeks = [Array(7).fill(null)]
  let day = 1
  for (let wday = startWday; wday < 7; wday++) {
    const date = moment([year, month, day])
    weeks[0][wday] = {
      day: day,
      events: [],
      today: isToday(now, date),
      holiday: isHoliday(date),
      weekend: isWeekend(wday)
    }
    day++
  }
  for (let week = 1; week <= 5; week++) {
    weeks.push(Array(7).fill(null))
    for (let wday = 0; wday < 7; wday++) {
      const date = moment([year, month, day])
      weeks[week][wday] = {
        day: day,
        events: [],
        today: isToday(now, date),
        holiday: isHoliday(date),
        weekend: isWeekend(wday)
      }
      if (day == lastDate) return weeks
      day++
    }
  }
  return weeks
}

const date = moment()
const weeks = getWeeks(date)

const initialState = {
  moment: date,
  weeks: weeks
}

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_MONTH': {
      const date = state.moment.add(1, 'months')
      return { ...state, weeks: getWeeks(date), moment: date }
    }
    case 'CURRENT_MONTH': {
      const date = moment()
      return { ...state, weeks: getWeeks(date), moment: date }
    }
    case 'PREV_MONTH': {
      const date = state.moment.add(-1, 'months')
      return { ...state, weeks: getWeeks(date), moment: date }
    }
    case 'ADD_EVENT': {
      let weeks = [...state.weeks]
      weeks[action.weekIndex][action.dayIndex].events.push(action.event)
      return { ...state, weeks: weeks }
    }
    case 'REMOVE_EVENT': {
      const weeks = [...state.weeks]
      const events = weeks[action.weekIndex][action.dayIndex].events.filter((event) => {
        return event.id != action.id
      })
      weeks[action.weekIndex][action.dayIndex].events = events
      return { ...state, weeks: weeks }
    }
  }
  return state
}

export default calendar
