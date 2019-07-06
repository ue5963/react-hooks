import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid">
      <h4>イベント作成</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventBody'>ボディー</label>
          <input className='form-control' id='formEventBody' />
        </div>

        <button className='btn btn-primary'>イベント作成</button>
        <button className='btn btn-danger'>すべてのイベント削除</button>
      </form>

      <h4>イベント一覧</h4>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
