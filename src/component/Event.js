import React from 'react'
import { DELETE_EVENT } from '../actions'

const Event = ({ item, dispatch }) => {

  const removeEvent = (e, id) => {
    e.preventDefault()

    const result = window.confirm(`Do you remove event id: ${id}`)
    if (!result) {
      return
    }

    dispatch({
      type: DELETE_EVENT,
      id
    })
  }

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td><button type='button' className='btn btn-danger' onClick={e => removeEvent(e, item.id)}>Delete</button></td>
    </tr>
  )
}

export default Event
