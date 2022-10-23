import React from 'react';
import { Box, Card, styled } from "@mui/material";
import { Recipe } from "../constants/recipeMasterList";
import TogglePill from "./TogglePill";

interface RecipeCardProps {
  recipe: Recipe;
}

const CardContainer = styled(Card)`
  padding: 1rem;
`;

const BoxContainer = styled(Box)`
  display: flex;
`;

const RecipeCard = (props: RecipeCardProps) => {
  const { name, ingredients } = props.recipe;
  return (
    <CardContainer>
      <p>{name}</p>
      <BoxContainer>
        {ingredients.map(item => (<TogglePill key={item} name={item} selected={false} />))}
      </BoxContainer>
    </CardContainer>
  )
}

export default RecipeCard;