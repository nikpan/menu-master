import React, { useEffect, useState } from 'react';
import './App.css';
import useArray from './hooks/useArray';
import { Recipe, recipes } from './constants/recipeMasterList';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PantryPage from './views/PantryPage';
import RecipePage from './views/RecipePage';

function App() {
  const { items: pantry, addItem, removeItem } = useArray([]);
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Pantry" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Recipes" icon={<FavoriteIcon />} />
          </BottomNavigation>
        </Box>
        {value === 0 ? <PantryPage addItem={addItem} removeItem={removeItem} /> : <></>}
        {value === 1 ? <RecipePage pantryList={pantry} /> : <></>}
      </header>
    </div>
  );
}

export default App;
