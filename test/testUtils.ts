import { allIngredients, IngredientCategory } from "../src/constants/ingredientMasterList";

export const categoryContainsIngredient = (name: string, category: IngredientCategory) => {
  for (let i = 0; i < category.ingredients.length; i++) {
    if (category.ingredients[i].name === name) {
      return true;
    }
  }
  return false;
}

export const isValidIngredient = (name: string) => {
  for (let i = 0; i < allIngredients.length; i++) {
    if (categoryContainsIngredient(name, allIngredients[i])) {
      return true;
    }
  }
  return false;
}