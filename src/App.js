import { TodoList } from './components/TodoList';
import {TodoCounter} from './components/TodoCounter';
import { TodoSearch} from './components/TodoSearch';
import {TodoNewButton} from './components/TodoNewButton';
import { TodoItem } from './components/TodoItem';
import React from 'react';
import './app.css'

 const defaultTodos = [{
  text: "cortar cebolla por mucho mucho tiempo",
  completed: false
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
let completedCount = 0;

function countCompleted() {
  defaultTodos.forEach((todo)=>{
    if (todo.completed) {
      completedCount ++
    }
  }) 
}

countCompleted()

function App() {
  return (
    <React.Fragment id='container'>
      
         
        <TodoCounter key={defaultTodos.indexOf(defaultTodos.text)} completed={completedCount} total={defaultTodos.length}/>
        
        
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
