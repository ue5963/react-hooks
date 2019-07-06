/**
 * action = {
 *   type: 'CREATE_EVENT',
 *   title: 'おしらせ',
 *   body: 'Dummy'
 * }
 *
 * # before
 * state = []
 * # after
 * state = [
 *  {
 *   id: 1,
 *   title: 'おしらせ',
 *   body: 'Dummy'
 *  }
 * ]
 *
 * @param state
 * @param action
 * @return {Array}
 */

const events = (state=[], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body }
      const length = state.length
      const id = length === 0 ? 1 : state[length -1].id + 1
      return [...state, { id, ...event }]
    case 'DELETE_EVENT':
      return state.filter(item => item.id !== action.id)
    case 'DELETE_ALL_EVENT':
      return []
    default:
      return state
  }
}

export default events
