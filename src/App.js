import React, {useState} from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <>
      <div>商品名 {name}： 価格 {price}</div>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>

      <button onClick={() => setState(props)}>Reset</button>
      <br />

      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  )
}

App.defaultProps = {
  name: 'えんぴつ',
  price: 1000,
}



export default App
