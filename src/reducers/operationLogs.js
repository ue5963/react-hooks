import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions'

const opatationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operateAt: action.operateAt,
      }
      return [...operationLog, state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default opatationLogs
