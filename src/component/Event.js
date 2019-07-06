import React from 'react'

const Event = ({ item, dispatch }) => {

  const removeEvent = (e, id) => {
    e.preventDefault()
    dispatch({
      type: 'DELETE_EVENT',
      id
    })
  }

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
      <td><button type='button' className='btn btn-danger' onClick={e => removeEvent(e, item.id)}>Delete</button></td>
    </tr>
  )
}

export default Event
