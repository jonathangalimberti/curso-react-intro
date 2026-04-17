import React from "react";
import "./todosLoading.css";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";

function TodosLoading() {
  return (
    <TodoList>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </TodoList>
  );
}

export { TodosLoading };
