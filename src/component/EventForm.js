import React, { useState } from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENT,
} from '../actions'

const EventForm = props => {

  const { state, dispatch } = props
  const [_state, setState] = useState(props)

  const { title, body } = _state

  const addEvent = e => {
    e.preventDefault()

    dispatch({
      type: CREATE_EVENT,
      title,
      body,
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
        <button className='btn btn-danger' onClick={removeAllEvent} disabled={state.length === 0}>すべてのイベント削除</button>
      </form>
    </>
  )
}

EventForm.defaultProps = {
  title: '',
  body: '',
}

export default EventForm
