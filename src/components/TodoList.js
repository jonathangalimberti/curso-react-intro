import { TodoItem } from './TodoItem';

function TodoList(props){
 return ( 
    <ul>
       {props.children}
    </ul>
 )
}

export {TodoList}
