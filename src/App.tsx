import React from 'react';
import './App.css';
import useArray from './hooks/useArray';
import { BottomNavigation, BottomNavigationAction, Box, styled } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PantryPage from './views/PantryPage';
import RecipePage from './views/RecipePage';

const AppContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { items: pantry, addItem, removeItem } = useArray([]);
  const [value, setValue] = React.useState(0);

  return (
    <AppContainer className="App">
      <header className="App-header">
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Pantry" icon={<KitchenIcon />} />
            <BottomNavigationAction label="Recipes" icon={<MenuBookIcon />} />
          </BottomNavigation>
        </Box>
      </header>
        {value === 0 ? <PantryPage addItem={addItem} removeItem={removeItem} /> : <></>}
        {value === 1 ? <RecipePage pantryList={pantry} /> : <></>}
    </AppContainer>
  );
}

export default App;
