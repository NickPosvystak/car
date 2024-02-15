import React from 'react';
import { StyledContainer } from './FilterCars.styled';
import BrandFilter from 'components/BrandFilter/BrandFilter';
import Price from 'components/Price/Price';
import MileageRangeSelector from 'components/KmFilter/KmFilter';

export const FilterCars = () => {
  return (
    <StyledContainer>
      <label>
        <BrandFilter />
      </label>
      <label>
        <Price />
      </label>
      <label>
        <MileageRangeSelector />
      </label>
      <button type="button">Search</button>
    </StyledContainer>
  );
};
