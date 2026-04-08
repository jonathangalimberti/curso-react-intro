import "./TodoCounter.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, todos } = React.useContext(TodoContext);

  if (todos.length === 0) {
    return <p> Agrega Todo's a tu lista</p>;
  } else if (completedTodos === todos.length) {
    return <p>Felicitaciones, completastes todos tus TODO's</p>;
  } else {
    return (
      <p>
        Has completado <b>{completedTodos}</b> de <b>{todos.length}</b> TODOs
      </p>
    );
  }
}

export { TodoCounter };
