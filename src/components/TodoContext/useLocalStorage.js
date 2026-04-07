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
    }
  },[itemName])


  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export { useLocalStorage };