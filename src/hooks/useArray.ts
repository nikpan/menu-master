import { useEffect, useState } from "react";
import { getStoredPantry, setStoredPantry } from "../utils/localStorageUtil";

const useArray = () => {
  const [items, setItems] = useState<Array<string>>(getStoredPantry());

  const addItem = (item: string) => {
    setItems([...items].concat([item]));
  }

  const removeItem = (item: string) => {
    setItems(items.filter(i => i !== item));
  }

  useEffect(() => {
    setStoredPantry(items);
  }, [items]);

  return { items, addItem, removeItem };
}

export default useArray;