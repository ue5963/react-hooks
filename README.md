# React Hooks sample

React Hooks を使ったアプリケーションサンプル

Hooksの機能をテストしています。

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## What React hooks

This app is react hooks test

### useState

```js
import React, { useState } from 'react'

const props <- initialProps is object or array or string

const [state, setState] = useState(props)

state is component state
setState is change handler of state
```

### useEffect

```js
import React, { useEffect } from 'react'


// Call everytime change state
useEffect(() => {
  console.log('This is like componentDidMount or componentDIdUpdate.')
})

// Call one time like componentDidMount
useEffect(() => {
  console.log('This is like componentDidMount. call one time')
}, [])

// Call to change name of state only
useEffect(() => {
  console.log('This callback is for name only.')
}, [name])

```

## useReducer

```js
import React, { useReducer } from 'react'
import operationLogs from '../reducers/operationLogs' // reducer

// useContext を使ったコンポーネントでAPP全体をラップすることで、子は state, dispatchを伝搬させずに呼び出せる
import AppContext from '../contexts/AppContext'

// initial state
const initialState = {
  events: [],
  operationLogs: [],
}

// Output state and dispatch, reducer is only this component. 
// useContext で子コンポーネントにstoreとdispatchを伝搬できる
const [state, dispatch] = useReducer(operationLogs, initialState)

return (
  <AppContext.Provider value={{ state, dispatch }}>
    <div className='container-fluid'>
      <EventForm />
      <Events />
      <OperationLogs />
    </div>
  </AppContext.Provider>
)
```

reducer for example

src/reducers/operationLogs.js

```js
import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions'

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operateAt: action.operateAt,
      }
      return [operationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs
```

## useContext

```js
import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'


// この指定だけで親で指定した `<AppContext.Provider value={{ state, dispatch }}>` の state, dispatch を取得できる
const { state, dispatch} = useContext(AppContext)
```

## Redux for combineReducer

Reducer を１つのまとめることで、state, dispatch をそれぞれの Reducer へ引き渡すことができる

src/reducers/index.js
```js
import { combineReducers } from 'redux'

import events from './events'
import operationLogs from './operationLogs'

export default combineReducers({
  events,
  operationLogs,
})
```

Use reducers

```
import reducer from '../reducers'


const [state, dispatch] = useReducer(reducer, initialState)

<AppContext.Provider value={{ state, dispatch }}>
...
</AppContext.Provider>
```


It is the contents that I took in this course.
https://github.com/DiveIntoHacking/react-hooks-101

Thank you.













