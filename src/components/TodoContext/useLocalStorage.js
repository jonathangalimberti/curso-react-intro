import React from "react";

function useLocalStorage(itemName, InitialValue) {
  const [item, setItem] = React.useState(InitialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(() => {
    const localSotarageItem = localStorage.getItem(itemName);
    let parsedItem;
    try {
      if (!localSotarageItem) {
      localStorage.setItem(itemName, JSON.stringify(InitialValue));
      parsedItem = InitialValue;
    } else {
      parsedItem = JSON.parse(localSotarageItem);
      setItem(parsedItem)
    }
    setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true)
      console.log(error);
      
    }
  },[])


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export { useLocalStorage };

  // const defaultTodos = [{text: "Contar ovejas", completed:false},{text: "Contar cuentos", completed:false},{text: "Contar plata", completed:false},{text: "Contar aros", completed:false},{text: "Contar comida", completed:false},{text: "Contar ropa", completed:false}]

  // localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))