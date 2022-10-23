import { useState } from "react";

type Ingredient = {
  name: string,
  selected: boolean
}

const useToggleList = (list: Ingredient[]) => {
  const [items, setItems] = useState(list);

  const toggleItem = (name: string) => {
    let newItems = [...items];
    const i = newItems.findIndex(item => item.name === name);
    if(i !== -1) {
      newItems[i].selected = !newItems[i].selected;
      setItems(newItems);
    }
  }

  return { items, toggleItem };
}

export default useToggleList;