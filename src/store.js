import { createStore } from 'redux';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'REMOVE_TODO':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    case 'SEARCH_TODO':
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState().todos));
});

export default store;
