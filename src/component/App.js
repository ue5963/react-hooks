import React, { useReducer } from 'react'
import reducer from '../reducers'

import EventForm from './EventForm'
import Event from './Event'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />

      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
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
  )
}

export default App
