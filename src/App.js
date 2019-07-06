import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(prevCount => prevCount + 2)
  const decrement2 = () => setCount(prevCount => prevCount - 2)

  const double = () => setCount(prevCount => prevCount * 2)
  const divice3 = () => {
    const res = count % 3
    if (res !== 0) {
      return
    }

    setCount(count / 3)
  }

  const reset = () => setCount(0)

  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <br />
      <button onClick={increment2}>+2</button>
      <button onClick={decrement2}>-2</button>

      <br />
      <button onClick={double}>X2</button>
      <button onClick={divice3}>3の倍数のときだけ３で割る</button>

      <br />
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
