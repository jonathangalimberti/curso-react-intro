import React from 'react';
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []);
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

  const [openModal, setOpenModal] = React.useState(false);

  const openCloseModal = () => {
    if(openModal){
      setOpenModal(false)
    }else {
      setOpenModal(true)
    };
  }
  return(
    <TodoContext.Provider value = {{
loading,
error,
completedTodos,
todos,
searchText,
setSearchText,
searchedTodo,
completeTodos,
deleteTodos,
openModal,
setOpenModal,
openCloseModal,
saveTodos,
}}>
    {children}
   </TodoContext.Provider>
  )
   
}

export {TodoContext, TodoProvider, useLocalStorage}