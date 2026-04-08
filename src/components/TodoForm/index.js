import './todoForm.css';
import React from 'react';
import {TodoContext} from "../TodoContext";

function TodoForm (){

    const {saveTodos,openCloseModal,todos} = React.useContext (TodoContext)
    const [newTodo,setNewTodo] = React.useState("");

    

    function onSubmit (){
        const newTodoInput = document.getElementById("newTodoInput");
        const newTodoValue = newTodoInput.value;

        console.log("esto es newTodoValue " + newTodoValue);
    }

    

    return(
        <div className = "container">
            <button className = "close" onClick={openCloseModal}>❌</button>
            <h3 className="title" 
            > Crear nueva tarea</h3>
            <form className = "form">
                <input type = "text" placeholder = "Nueva tarea" className= "input" id="newTodoInput"/>
                <button type = "button" className ="submit" onClick={onSubmit}> Agregar tarea</button>
            </form>
        </div>
    )
}

export { TodoForm }