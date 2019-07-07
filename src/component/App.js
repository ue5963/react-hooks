import React, { useReducer } from 'react'
import reducer from '../reducers'
import EventForm from './EventForm'
import Event from './Event'
import AppContext from '../contexts/AppContext'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={'Hello'}>
      <div className='container-fluid'>
        <EventForm state={state} dispatch={dispatch} />

        <h4>イベント一覧</h4>
        <table className='table table-hover'>
          <thead>
          <tr>
            <th>useContext value</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th />
          </tr>
          </thead>
          <tbody>
          { state.map(item => <Event key={item.id} item={item} dispatch={dispatch} />)}
          </tbody>
        </table>
      </div>
    </AppContext.Provider>
  )
}

export default App
