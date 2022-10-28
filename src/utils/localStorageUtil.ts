const lsPantryKey = 'bite2eat:pantry'

export const getStoredPantry = () => {
  const storedPantryString = localStorage.getItem(lsPantryKey);
  if(storedPantryString) {
    try {
      const pantryData: string[] = JSON.parse(storedPantryString);
      return pantryData;
    } catch {
      return [];
    }
  } else {
    return [];
  }
}

export const setStoredPantry = (pantry: string[]) => {
  localStorage.setItem(lsPantryKey, JSON.stringify(pantry));
}