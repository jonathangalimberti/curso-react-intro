import './TodoCounter.css';

function TodoCounter(props){
    if (props.total === 0 ) {
        return <p> Agrega Todo's a tu lista</p>
    }else if (props.todos === props.total){
        return <p>Felicitaciones, completastes todos tus TODO's</p>
    }else{
        return ( <p >Has completado <b>{props.todos}</b> de <b>{props.total}</b> TODOs</p>)
    }
}

export {TodoCounter}