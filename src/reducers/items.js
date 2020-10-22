const item = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.text,
        viewed: false,
        rating: 0
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        viewed: !state.viewed
      })

    default:
      return state
  }
}

const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'TOGGLE_ITEM':
      return state.map(i =>
        item(i, action)
      )
    default:
      return state
  }
}

export default items