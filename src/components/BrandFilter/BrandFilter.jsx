import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectFilterMake, selectItems } from '../../redux/selectors';
import { StyledAutocomplete } from './BrandFilter.styled';
import { setFilterMake } from '../../redux/authReducer';

export default function BrandFilter() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const items = useSelector(selectItems) || [];
  const filterMake = useSelector(selectFilterMake);

    const handleFilterChange = (event, value) => {
      dispatch(setFilterMake(value));
    };

   const uniqueMakes = [''].concat(
     Array.from(new Set(items.map(item => item.make.toLowerCase())))
   );
  const filteredModels = uniqueMakes.map(
    make => make.charAt(0).toUpperCase() + make.slice(1)
  );
  return (
    <StyledAutocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredModels}
      value={filterMake}
      onChange={handleFilterChange}
      getOptionLabel={(option) => option.charAt(0).toUpperCase() + option.slice(1)}
      sx={{ width: 224 }}
      renderInput={params => <TextField {...params} label="Car brand" />}
    />
  );
}
