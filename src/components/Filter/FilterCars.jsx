import React from 'react';
import { StyledContainer } from './FilterCars.styled';
import BrandFilter from 'components/BrandFilter/BrandFilter';

export const FilterCars = () => {
  return (
    <StyledContainer>
      <label>
        <p>Car brand</p>
        <BrandFilter />
      </label>
      <label>
        <p>Price / 1 hour</p>
        <input />
      </label>
      <label>
        {' '}
        <p>Car mileage / km</p>
        <input />
      </label>
      <button type="button">Search</button>
    </StyledContainer>
  );
};
