import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  console.log(props.loading);

  if (props.loading === undefined) {
    return (
      <li className="load-animation">
        <span onClick={props.onComplete}>✔️</span>
        <p className={`${props.completed && "completed"}`}>{props.text}</p>
        <span onClick={props.onDelete}>❌</span>
      </li>
    );
  } else {
    const classNameRemove = document.getElementsByTagName("li");
    console.log(classNameRemove);

    return (
      <li>
        <span onClick={props.onComplete}>✔️</span>
        <p className={`${props.completed && "completed"}`}>{props.text}</p>
        <span onClick={props.onDelete}>❌</span>
      </li>
    );
  }
}

export { TodoItem };
