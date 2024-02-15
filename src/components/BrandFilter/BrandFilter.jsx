import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectItems } from '../../redux/selectors';
import { StyledAutocomplete } from './BrandFilter.styled';

export default function BrandFilter() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const items = useSelector(selectItems) || [];

  const filteredModels = Array.isArray(items) && items.map(item => item.make);

  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredModels}
      sx={{ width: 224 }}
      renderInput={params => <TextField {...params} label="Car brand" />}
    />
  );
}
