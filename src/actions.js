export const addTodo = (todo) => ({ type: 'ADD_TODO', payload: todo });
export const removeTodo = (id) => ({ type: 'REMOVE_TODO', payload: id });
export const searchTodo = (query) => ({ type: 'SEARCH_TODO', payload: query });
