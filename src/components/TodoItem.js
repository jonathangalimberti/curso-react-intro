import './TodoItem.css'

function TodoItem(props){

     return ( <li>
    <span onClick={(event)=>{
      const toggle = event.target.nextSibling;
      const toggleValue = toggle.classList;
      console.log(toggle);
      console.log (toggleValue);
      if (toggleValue.contains("completed") ) {
        toggle.classList.remove("completed")
      }else
      {
        toggle.classList.add('completed')
      };
      console.log(event.target.nextSibling.classList.value)
    }}>✔️</span>
    <p className={`${props.completed && "completed"}`}>{props.text}</p>
    <span onClick={(event) =>{
      const parentLi= event.target.parentElement;
      parentLi.remove();
    }}>❌</span>
  </li>)
  } 



export {TodoItem}
