// CatalogPage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/operations';
import { selectFilterMake, selectItems } from '../redux/selectors';
import { setFilterMake } from '../redux/authReducer';
import { FilterCars } from 'components/Filter/FilterCars';
import { CatalogList } from 'components/Catalog/CatalogList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems) || [];
  const filterMake = useSelector(selectFilterMake);
  const [selectedPrice] = useState(null);

  const handleFilterChange = make => {
    dispatch(setFilterMake(make));
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const filteredCars = items.filter(item => {
    const makeMatch =
      !filterMake || item.make.toLowerCase() === filterMake.toLowerCase();
    const priceMatch =
      !selectedPrice || item.rentalPrice <= selectedPrice.label;
    return makeMatch && priceMatch;
  });

  return (
    <div>
      <FilterCars onChange={handleFilterChange} />
      <CatalogList cars={filteredCars} selectedPrice={selectedPrice} />
    </div>
  );
};

export default CatalogPage;
