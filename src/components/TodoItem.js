import React from 'react';
import './TodoItem.css'

function TodoItem(props){

     return ( 
     <li>
    <span 
    onClick={props.onComplete}
    >✔️</span>
    <p className={`${props.completed && "completed"}`}>{props.text}</p>
    <span onClick={props.onDelete}>❌</span>
  </li>
  
  )
  } 



export {TodoItem}
