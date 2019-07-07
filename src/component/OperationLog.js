import React from 'react'

const OparationLogs = ({ item }) => {
  return (
    <tr>
      <td>{item.description}</td>
      <td>{item.operateAt}</td>
    </tr>
  )
}

export default OparationLogs
