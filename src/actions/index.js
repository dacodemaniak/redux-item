let nextItemId = 0
export const addItem = (title) => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    title
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleItem = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}