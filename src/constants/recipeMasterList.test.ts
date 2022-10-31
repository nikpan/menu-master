import { recipes } from './recipeMasterList';
import { isValidIngredient } from '../../test/testUtils';

describe('Recipe Tests:', () => {
  recipes.forEach(currentRecipe => {
    test(`Recipe: ${currentRecipe.name} contains valid ingredients`, () => {
      currentRecipe.ingredients.forEach(ingredient => expect(isValidIngredient(ingredient)).toBe(true))
    });
  });

  recipes.forEach(currentRecipe => {
    test(`Two recipes don't have the same name: ${currentRecipe.name}`, () => {
      let count = 0;
      recipes.forEach(recipe => {
        count += recipe.name === currentRecipe.name ? 1 : 0;
      });
      expect(count).toBe(1);
    });
  });

  // const exceptionList = ['Aloo Paratha', 'Potato Gnocchi'];
  // recipes.forEach(currentRecipe => {
  //   if (exceptionList.indexOf(currentRecipe.name) === -1) {
  //     recipes.forEach(recipe => {
  //       if (recipe.name !== currentRecipe.name) {
  //         test(`Two recipes don't have the same ingredients: ${currentRecipe.name} ${recipe.name}`, () => {
  //           expect(currentRecipe.ingredients).not.toEqual(recipe.ingredients);
  //         });
  //       }
  //     });
  //   }
  // });
});