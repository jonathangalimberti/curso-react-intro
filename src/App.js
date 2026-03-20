import { TodoList } from './components/TodoList';
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch} from './components/TodoSearch';
import {TodoNewButton} from './components/TodoNewButton';
import { TodoItem } from './components/TodoItem';
import './App.css';
import React from 'react';

 const defaultTodos = [{
  text: "cortar cebolla",
  completed: true
},
{
  text: "hacer la comida",
  completed: false
},
{
  text: "Tomar mate",
  completed: true
},
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
  <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
))}
      </TodoList>
      <TodoNewButton/>
    </React.Fragment>
  );
}

export {defaultTodos};

export default App;
