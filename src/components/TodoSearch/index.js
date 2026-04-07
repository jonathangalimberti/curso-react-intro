import React from "react";
import './TodoSearch.css'

function TodoSearch({searchText,setSearchText,todos}){
 return ( <input placeholder="Buscar TODO" 
    value= {searchText}
    onChange={(event)=>{
        setSearchText(event.target.value)
        const result = todos.filter((todo) => todo.text.toLowerCase().includes(searchText.toLowerCase()));
        console.log(result);
        
 }}></input>)
}

export {TodoSearch}