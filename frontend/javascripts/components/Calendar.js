import React from 'react'
import Week from './Week'
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import NavigationArrowRefresh from 'material-ui/svg-icons/navigation/refresh'
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'

const Calendar = ({calendar, actions}) => {
  const year = calendar.moment.get('year')
  const month = calendar.moment.get('month') + 1
  const weeks = calendar.weeks.map((week, index) => {
    return (<Week key={index} weekIndex={index} week={week} addEvent={actions.addEvent} removeEvent={actions.removeEvent} />)
  })
  const next = () => {
    actions.nextMonth()
  }
  const current = () => {
    actions.currentMonth()
  }
  const prev = () => {
    actions.prevMonth()
  }
  const title = `${year}年${month}月`
  return (
    <div>
      <AppBar title={title} />
      <div style={{marginTop: 10}}>
        <FloatingActionButton onClick={prev} style={{marginRight: 5}}>
          <NavigationArrowBack />
        </FloatingActionButton>
        <FloatingActionButton onClick={current} style={{marginRight: 5}}>
          <NavigationArrowRefresh />
        </FloatingActionButton>
        <FloatingActionButton onClick={next}>
          <NavigationArrowForward />
        </FloatingActionButton>
      </div>
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>日</TableHeaderColumn>
            <TableHeaderColumn>月</TableHeaderColumn>
            <TableHeaderColumn>火</TableHeaderColumn>
            <TableHeaderColumn>水</TableHeaderColumn>
            <TableHeaderColumn>木</TableHeaderColumn>
            <TableHeaderColumn>金</TableHeaderColumn>
            <TableHeaderColumn>土</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>{weeks}</TableBody>
      </Table>
    </div>
  )
}

export default Calendar
