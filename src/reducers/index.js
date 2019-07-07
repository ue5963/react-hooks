import { combineReducers } from 'redux'

import events from './events'
import oparationLogs from './operationLogs'

export default  combineReducers({
  events,
  oparationLogs,
})
