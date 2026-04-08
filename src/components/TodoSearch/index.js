import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch(){

    const {searchText,setSearchText,todos} = React.useContext(TodoContext)
 return ( <input placeholder="Buscar TODO" 
    value= {searchText}
    onChange={(event)=>{
        setSearchText(event.target.value)
        const result = todos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()));
        console.log(result);
        
 }}></input>)
}

export {TodoSearch}