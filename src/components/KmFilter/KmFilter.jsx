import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MileageInput() {
  const [fromKm, setFromKm] = useState('');
  const [toKm, setToKm] = useState('');
  const [stepOptions, setStepOptions] = useState([]);
  const maxMileage = 10000;

  const handleFromChange = event => {
    setFromKm(event.target.value);
  };

  const handleToChange = event => {
    setToKm(event.target.value);
  };

  useEffect(() => {
    const stepOptions = [];
    for (let i = null; i <= maxMileage; i += 1000) {
      stepOptions.push(i);
    }
    setStepOptions(stepOptions);
  }, [maxMileage]);

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel id="from-select-label">From</InputLabel>
        <Select
          labelId="from-select-label"
          id="from-select"
          value={fromKm}
          label="From"
          onChange={handleFromChange}
        >
          {stepOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="to-select-label">To</InputLabel>
        <Select
          labelId="to-select-label"
          id="to-select"
          value={toKm}
          label="To"
          onChange={handleToChange}
        >
          {stepOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
