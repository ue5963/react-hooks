import React, { useEffect, useReducer } from 'react'
import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'

import 'bootstrap/dist/css/bootstrap.min.css'

const APP_STATE = 'appState'

const App = () => {
  const appState = localStorage.getItem(APP_STATE)

  const initialState = appState? JSON.parse(appState) : {
    events: [],
    operationLogs: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_STATE, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className='container-fluid'>
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
