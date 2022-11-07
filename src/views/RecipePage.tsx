import React, { useEffect, useState } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { recipes } from '../constants/recipeMasterList';
import RecipeCard from '../components/RecipeCard';
import TuneIcon from '@mui/icons-material/Tune';
import FilterModal from '../components/FilterModal';

interface RecipePageProps {
  pantryList: string[];
}

const FilterBox = styled(Box)`
  padding: 1rem;
`;

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

  const [open, setOpen] = useState(false);
  const handleClose = (newVegFilter: boolean, newEffortFilter: string) => {
    setVegOnly(newVegFilter);
    setEffort(newEffortFilter);
    setOpen(false);
  }
  const handleOpen = () => setOpen(true);
  const [vegOnly, setVegOnly] = useState(false);
  const [effort, setEffort] = useState("anyEffort");

  useEffect(() => {
    console.debug(vegOnly, effort);
  }, [vegOnly, effort]);

  return (
    <Box>
      <FilterBox>
        <IconButton onClick={handleOpen}>
          <TuneIcon />
        </IconButton>
          <FilterModal open={open} closeCallback={handleClose} />
      </FilterBox>
      {listRecipes.map(recipe => (
        <RecipeCard key={recipe.name} recipe={recipe} />
      ))}
    </Box>
  )
}

export default RecipePage;