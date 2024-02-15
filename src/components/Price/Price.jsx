import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectItems } from '../../redux/selectors';
import { v4 as uuidv4 } from 'uuid';
import { StyledAutocomplete } from './Price.styled';

export default function Price() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const items = useSelector(selectItems) || [];
  //   const filter = useSelector(selectItemsFilter) || '';

  const filteredPrice =
    Array.isArray(items) &&
    items.map(item => ({
      label: item.rentalPrice,
      key: uuidv4(), // Generate a unique identifier for each item
    }));

  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredPrice}
      getOptionLabel={option => option.label}
      sx={{ width: 224 }}
      renderInput={params => <TextField {...params} label="Price / 1 hour" />}
    />
  );
}
