import React from "react";
import { TodoList } from "../components/TodoList";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoNewButton } from "../components/TodoNewButton";
import { TodoItem } from "../components/TodoItem";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../components/TodoContext";
import {Modal} from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI() {

  const {
            loading,
            error,
            searchedTodo,
            completeTodos,
            deleteTodos,
            openModal,
          } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div id="container">
        <TodoCounter/>
        <TodoSearch/>
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {!loading && searchedTodo.length === 0 && <EmptyTodos />}

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
        
          {openModal && (
            <Modal  >
              <TodoForm/>
            </Modal>)}
        
      </div>
    </React.Fragment>
  );
}

export { AppUI };
