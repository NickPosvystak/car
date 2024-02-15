import React from 'react';
import { StyledContainer } from './FilterCars.styled';

export const FilterCars = () => {
  return (
    <StyledContainer>
      <p>Car brand</p>
      <p>Price / 1 hour</p>
      <p>Car mileage / km</p>
      <button type='button'>Search</button>
    </StyledContainer>
  );
};
