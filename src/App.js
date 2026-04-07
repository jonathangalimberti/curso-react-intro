import { TodoList } from "./components/TodoList";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoNewButton } from "./components/TodoNewButton";
import { TodoItem } from "./components/TodoItem";
import React from "react";
import "./app.css";

function useLocalStorage(itemName, InitialValue) {
  const localSotarageItem = localStorage.getItem(itemName);

  let parsedItem = InitialValue;

  if (!localSotarageItem) {
    localStorage.setItem(itemName, JSON.stringify(InitialValue));
  } else {
    parsedItem = JSON.parse(localSotarageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1",[]);
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
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>
        <TodoNewButton />
      </div>
    </React.Fragment>
  );
}

export default App;
