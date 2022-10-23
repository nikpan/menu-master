import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, styled } from '@mui/material';
import Card from '@mui/material/Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TogglePill from './TogglePill';
import useToggleList from '../hooks/useToggleList';

interface IngredientCategoryCardProps {
  categoryName: string,
  ingredients: Ingredient[],
  addItem: (name: string) => void,
  removeItem: (name: string) => void
}

interface Ingredient {
  name: string,
  selected: boolean
}

const AccordionSummaryContainer = styled(AccordionSummary)`
  background-color: lightblue;
`;

const AccordionDetailsContainer = styled(AccordionDetails)`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled(Card)`
  padding: 1rem;
`;

const IngredientCategoryCard = (props: IngredientCategoryCardProps) => {
  const { categoryName, ingredients, addItem, removeItem } = props;
  const { items, toggleItem } = useToggleList(ingredients);
  return (
    <CardContainer>
      <Accordion>
        <AccordionSummaryContainer expandIcon={<ExpandMoreIcon />}>
          {categoryName}
        </AccordionSummaryContainer>
        <AccordionDetailsContainer>
          {items.map(item => (
            <TogglePill
              key={item.name}
              {...item}
              onClick={() => {
                toggleItem(item.name);
                if (item.selected) {
                  addItem(item.name);
                } else {
                  removeItem(item.name);
                }
              }}
            />))}
        </AccordionDetailsContainer>
      </Accordion>
    </CardContainer>
  );
}

export default IngredientCategoryCard;