import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import OperatiionLog from './OperationLog'

const OperationLogs = () => {

  const { state } = useContext(AppContext)

  return (
    <>
      <h4>イベントログ一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Description</th>
            <th>Operation at</th>
          </tr>
        </thead>
        <tbody>
          { state.operationLogs.map(item => <OperatiionLog key={item.operateAt} item={item} />)}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs
