import { Catalog } from 'components/Catalog/Catalog';
import React from 'react';

const CatalogPage = () => {
  return (
    <div
      style={{
        border: '2px solid toBePartiallyChecked',
        backgroundColor: 'orange',
      }}
    >
      <Catalog />
    </div>
  );
};
export default CatalogPage;
