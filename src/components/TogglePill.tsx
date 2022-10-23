import React from 'react';
import { Box, Chip, styled } from '@mui/material';

interface TogglePillProps {
  name: string,
  selected: boolean,
  onClick?: () => void;
}

const ChipContainer = styled(Box)`
  padding: 10px;
`;

const TogglePill = (props: TogglePillProps) => {
  const { name, selected, onClick } = props;

  return (
    <ChipContainer onClick={onClick}>
      <Chip variant={selected ? 'filled' : 'outlined'} label={name} />
    </ChipContainer>
  )
}

export default TogglePill;