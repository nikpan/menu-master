import { useState } from "react";

const useArray = (initialData: string[]) => {
  const [items, setItems] = useState(initialData);

  const addItem = (item: string) => {
    setItems([...items].concat([item]));
  }

  const removeItem = (item: string) => {
    setItems(items.filter(i => i !== item));
  }

  return { items, addItem, removeItem };
}

export default useArray;