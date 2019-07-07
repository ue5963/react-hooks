import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

import {
  DELETE_EVENT,
  ADD_OPERATION_LOG,
} from '../actions'

const Event = ({ item }) => {

  const { dispatch } = useContext(AppContext)

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

    dispatch({
      type: ADD_OPERATION_LOG,
      description: `Delete one item. id: ${id}`,
      operateAt: timeCurrentIso8601(),
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
