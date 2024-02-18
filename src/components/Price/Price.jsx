import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectItems } from '../../redux/selectors';
import { StyledAutocomplete } from './Price.styled';

export default function Price() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const items = useSelector(selectItems) || [];

  const uniquePrice = [''].concat(
    Array.from(new Set(items.map(item => item.rentalPrice.toLowerCase())))
  );
  const filteredPrice = uniquePrice.map(
    rentalPrice => rentalPrice.charAt(0).toUpperCase() + rentalPrice.slice(1)
  );

  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredPrice}
      sx={{ width: 224 }}
      renderInput={params => <TextField {...params} label="Price / 1 hour" />}
    />
  );
}
