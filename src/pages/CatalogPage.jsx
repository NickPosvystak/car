import { CatalogList } from 'components/Catalog/CatalogList';
import { FilterCars } from 'components/Filter/FilterCars';
import React from 'react';

const CatalogPage = () => {
  return (
    <div>
      <FilterCars/>
      <CatalogList />
    </div>
  );
};
export default CatalogPage;
