let nextTodoId = 0
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}