import React, { useState } from 'react';
import { Box, Typography, ToggleButton, ToggleButtonGroup, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface FilterModalProps {
  closeCallback: (newVegOnly: boolean, newEffort: string) => void;
  open: boolean;
}

const FilterModal = (props: FilterModalProps) => {
  const { closeCallback: handleClose, open } = props;
  const [vegOnly, setVegOnly] = useState(false);
  const [effort, setEffort] = useState("anyEffort");

  const handleEffortChange = (event: React.MouseEvent, newEffort: string) => {
    setEffort(newEffort);
  }

  return (
    <Modal
      open={open}
      onClose={() => handleClose(vegOnly, effort)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    ><Box sx={style}>
        <Typography variant="h6">
          Filters
        </Typography>
        <ToggleButton size='small' value="vegOnly" selected={vegOnly} onChange={() => setVegOnly(!vegOnly)}>Vegetarian Only</ToggleButton>
        <Typography variant="h6">
          Effort
        </Typography>
        <ToggleButtonGroup size='small' value={effort} exclusive onChange={handleEffortChange}>
          <ToggleButton value="anyEffort">Any</ToggleButton>
          <ToggleButton value="lowEffort">Low Effort</ToggleButton>
          <ToggleButton value="medEffort">Medium Effort</ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Modal>
  )
}

export default FilterModal;