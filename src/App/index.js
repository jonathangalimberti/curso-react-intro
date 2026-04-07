import { AppUI } from "./AppUI";
import React from "react";
import "./app.css";
import { TodoContext, TodoProvider } from "../components/TodoContext";

function App() {
  
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
      
  );
}

export default App;
