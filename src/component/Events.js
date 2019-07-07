import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import Event from './Event'

const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext)

  return (
    <>
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
    </>
  )
}

export default Events
