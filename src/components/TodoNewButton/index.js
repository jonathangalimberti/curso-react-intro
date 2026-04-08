import { TodoContext } from "../TodoContext";
import "./TodoNewButton.css";
import React from "react";

function TodoNewButton() {
  const { openCloseModal } = React.useContext(TodoContext);

  return (
    <button className="todoNewButton" type="button" onClick={openCloseModal}>
      {" "}
      +{" "}
    </button>
  );
}

export { TodoNewButton };
