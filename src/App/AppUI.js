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

function AppUI() {
//   {
// loading,
// error,
// completedTodos,
// todos,
// searchText,
// setSearchText,
// searchedTodo,
// completeTodos,
// deleteTodos
// }
  return (
    <React.Fragment>
      <div id="container">
        <TodoCounter
          // key={todos.indexOf(todos.text)}
          // todos={completedTodos}
          // total={todos.length}
        />
        <TodoSearch
          // todos={todos}
          // searchText={searchText}
          // setSearchText={setSearchText}
        />
        <TodoContext.Consumer>
          {({
            loading,
            error,
            searchedTodo,
            completeTodos,
            deleteTodos,
          }) => (
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
          )}
        </TodoContext.Consumer>

        <TodoNewButton />
      </div>
    </React.Fragment>
  );
}

export { AppUI };
