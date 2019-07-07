import React, { useState, useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

import {
  CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions'

const EventForm = props => {

  const { state, dispatch } = useContext(AppContext)
  const [_state, setState] = useState(props)

  const { title, body } = _state

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'Add event',
      operateAt: timeCurrentIso8601(),
    })

    // Clear input title, body
    setState({ title: '', body: '' })
  }

  const removeAllEvent = e => {
    e.preventDefault()

    const result = window.confirm('Do you remove all event')
    if (!result) {
      return
    }

    dispatch({
      type: DELETE_ALL_EVENT,
    })

    dispatch({
      type: ADD_OPERATION_LOG,
      description: 'Delete all event',
      operateAt: timeCurrentIso8601(),
    })
  }

  const removeAllLogs = e => {
    e.preventDefault()

    const result = window.confirm('Are you really all logs delete?')

    if (!result) {
      return
    }

    dispatch({
      type: DELETE_ALL_OPERATION_LOGS,
    })
  }

  const changeTitle = title => {
    setState({ ..._state, title })
  }

  const changeBody = (body) => {
    setState({ ..._state, body })
  }



  return (
    <>
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
        <button className='btn btn-danger' onClick={removeAllEvent} disabled={state.events.length === 0}>すべてのイベント削除</button>
        <button className='btn btn-danger' onClick={removeAllLogs} disabled={state.operationLogs.length === 0}>すべての操作ログを削除</button>
      </form>
    </>
  )
}

EventForm.defaultProps = {
  title: '',
  body: '',
}

export default EventForm
