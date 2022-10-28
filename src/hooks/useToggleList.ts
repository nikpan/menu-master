import { useState } from "react";
import { getStoredPantry } from "../utils/localStorageUtil";

type Ingredient = {
  name: string,
  selected: boolean
}

const useToggleList = (list: Ingredient[]) => {
  const initialPantryList: string[] = getStoredPantry();
  const [items, setItems] = useState(list.map(item => {
    return {
      name: item.name,
      selected: initialPantryList.includes(item.name)
    }
  }));

  const toggleItem = (name: string) => {
    let newItems = [...items];
    const i = newItems.findIndex(item => item.name === name);
    if (i !== -1) {
      newItems[i].selected = !newItems[i].selected;
      setItems(newItems);
    }
  }

  return { items, toggleItem };
}

export default useToggleList;