import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Calendar from '../components/Calendar'

const App = ({calendar, actions}) => (
  <div>
    <Calendar calendar={calendar} actions={actions}></Calendar>
  </div>
)

const mapStateToProps = (state) => {
  return {
    calendar: state.calendar,
    actions: state.actions
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(Actions, dispatch) }
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connector(App)
