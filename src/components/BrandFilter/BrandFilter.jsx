import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { selectItems } from '../../redux/selectors';

export default function ComboBox() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const items = useSelector(selectItems) || [];
//   const filter = useSelector(selectItemsFilter) || '';

  const filteredModels = Array.isArray(items) && items.map(item => item.model);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={filteredModels}
      sx={{ width: 224 }}
      renderInput={params => <TextField {...params} label="Car brand" />}
    />
  );
}