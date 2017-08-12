import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './containers/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = createStore(reducer)

render((
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
), document.getElementById('app'))
