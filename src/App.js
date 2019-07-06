import React, {useState, useEffect} from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect(() => {
    console.log('--1-- This is like componentDidMount or componentDIdUpdate.')
  })

  useEffect(() => {
    console.log('This is like componentDidMount. call one time')
  }, [])

  useEffect(() => {
    console.log('This callback is for name only.')
  }, [name])

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
