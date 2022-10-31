import React from 'react';
import { Box } from '@mui/material';
import { recipes } from '../constants/recipeMasterList';
import RecipeCard from '../components/RecipeCard';

interface RecipePageProps {
  pantryList: string[];
}

const RecipePage = (props: RecipePageProps) => {
  const { pantryList } = props;
  const listRecipes = recipes.filter(recipe => {
    for (let i = 0; i < recipe.ingredients.length; i++) {
      if (pantryList.indexOf(recipe.ingredients[i]) === -1) {
        return false;
      }
    }
    return true;
  });

  return (
    <Box>
      {listRecipes.map(recipe => (
        <RecipeCard key={recipe.name} recipe={recipe} />
      ))}
    </Box>
  )
}

export default RecipePage;