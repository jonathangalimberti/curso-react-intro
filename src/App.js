import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoNewButton } from "./components/TodoNewButton";
import { TodoItem } from "./components/TodoItem";
import React from "react";
import "./app.css";

function App() {
  const defaultTodos = localStorage.getItem("TODOS_V1");
  
  let parsedTodos = [];
  
  if (!defaultTodos){
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
  }else {
    parsedTodos = JSON.parse(defaultTodos)
  }
  
  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchText, setSearchText] = React.useState("");
  
  const searchedTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase()),
  );

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const completeTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1",stringifiedTodos);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <div id="container">
        <TodoCounter
          key={todos.indexOf(todos.text)}
          todos={completedTodos}
          total={todos.length}
        />
        <TodoSearch
          todos={todos}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <TodoList>
          {searchedTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete = {() => deleteTodos(todo.text)}
            
            />
          ))}
        </TodoList>
        <TodoNewButton />
      </div>
    </React.Fragment>
  );
}


export default App;
