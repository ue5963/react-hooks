import React, { useState, useReducer } from 'react'
import reducer from '../reducers'
import Event from './Event'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  const [state, dispatch] = useReducer(reducer, [])

  const [_state, setState] = useState(props)
  const {title, body} = _state

   const addEvent = e => {
     e.preventDefault()

      dispatch({
        type: 'CREATE_EVENT',
        title,
        body,
      })

     // Clear input title, body
     setState(props)
   }

  const removeAllEvent = e => {
    e.preventDefault()

    const result = window.confirm('Do you remove all event')
    if (!result) {
      return
    }

    dispatch({
      type: 'DELETE_ALL_EVENT',
    })
  }

  const changeTitle = title => {
    setState({ ..._state, title })
  }

  const changeBody = (body) => {
    setState({ ..._state, body })
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>Title</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => changeTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>Body</label>
          <input className='form-control' id='formEventBody' value={body} onChange={e => changeBody(e.target.value)} />
        </div>

        <button className='btn btn-primary' onClick={addEvent} disabled={!title || !body}>イベント作成</button>
        <button className='btn btn-danger' onClick={removeAllEvent} disabled={state.length === 0}>すべてのイベント削除</button>
      </form>

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

App.defaultProps = {
  title: '',
  body: '',
}

export default App
