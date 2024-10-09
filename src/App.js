import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, searchTodo } from './actions';
import ToDoList from './ToDoList';

const App = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: input
      }));
      setInput('');
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchTodo(e.target.value));
  };

  return (
    <AppContainer>
      <h1>Buck's To Do List</h1>
      <p>A demonstration of functional programming for my application to Ease.io</p>
      <FormContainer>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search todos"
        />

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </FormContainer>

      <ToDoList todos={todos} search={search} onRemoveTodo={(id) => dispatch(removeTodo(id))} />
    </AppContainer>
  );
};

export default App;

const FormContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  input {
    width: auto;
  }
  button {
    max-height: 85%;
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    button {
      width: 100%;
    }
 }
`;

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  bacground-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  text-align: center;
  max-height: 100vh;
  overflow-y: auto;
`;
