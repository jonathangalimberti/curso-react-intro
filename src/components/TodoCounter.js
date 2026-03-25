import './TodoCounter.css';

function TodoCounter(props){
 return ( <p>Has completado <b>{props.completed}</b> de <b>{props.total}</b> TODOs</p>)
}

export {TodoCounter}