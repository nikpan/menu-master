import React from 'react';
import { Box } from '@mui/material';
import { allIngredients } from '../constants/ingredientMasterList';
import IngredientCategoryCard from '../components/IngredientCategoryCard';

interface PantryPageProps {
  addItem: (name: string) => void;
  removeItem: (name: string) => void;
}

const PantryPage = (props: PantryPageProps) => {
  const { addItem, removeItem } = props;
  return (
    <Box sx={{ width: 500 }}>
      {allIngredients.map(category => (
        <IngredientCategoryCard
          key={category.categoryName}
          {...category}
          addItem={addItem}
          removeItem={removeItem} />
      ))}
    </Box>
  )
}

export default PantryPage;