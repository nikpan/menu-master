import React from 'react';
import { Box, Card, styled } from "@mui/material";
import { Recipe } from "../constants/recipeMasterList";
import TogglePill from "./TogglePill";

interface RecipeCardProps {
  recipe: Recipe;
}

const CardContainer = styled(Card)`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-flow: row;
`;

const IngredientContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled(Box)`
  width: '10px';
  height: '10px';
`;

const InfoContainer = styled(Box)`
  padding-left: 1rem;
`;

const InfoTitle = styled(Box)`
`;

const RecipeCard = (props: RecipeCardProps) => {
  const { name, ingredients, imgSrc } = props.recipe;
  return (
    <CardContainer>
      <ImageContainer>
        <img src={imgSrc} alt={name} style={{maxWidth: '100px'}} height='auto' />
      </ImageContainer>
      <InfoContainer>
        <InfoTitle><p>{name}</p></InfoTitle>
        <IngredientContainer>
          {ingredients.map(item => (<TogglePill key={item} name={item} selected={false} />))}
        </IngredientContainer>
      </InfoContainer>
    </CardContainer>
  )
}

export default RecipeCard;