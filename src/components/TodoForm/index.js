import "./todoForm.css";
import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { openCloseModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    openCloseModal();
  };

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <div className="container">
      <h3 className="title"> Crear nueva tarea</h3>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          type="text"
          placeholder="Nueva tarea"
          className="textArea"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="container-button">
          <button className="close" onClick={openCloseModal}>
            Cancelar
          </button>
          <button className="submit" onClick={onSubmit}>
            {" "}
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
