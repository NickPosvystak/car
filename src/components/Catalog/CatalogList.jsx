import React from 'react';
import {
  StyledUl,
  StyledImg,
  StyledList,
  StyledButton,
  ModelDiv,
  StyledDescription,
} from './CatalogList.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/operations';
import { selectItems, selectItemsFilter } from '../../redux/selectors';

const CatalogList = () => {
  const dispatch = useDispatch();

  const page = 1;
  const limit = 12;

  useEffect(() => {
    dispatch(fetchCars(page, limit));
  }, [dispatch]);

  const items = useSelector(selectItems) || [];
  const filter = useSelector(selectItemsFilter) || '';

  const filteredCars =
    Array.isArray(items) &&
    items.filter(
      item =>
        item.model &&
        item.model.toLowerCase().includes(filter.toLowerCase().trim())
    );

  return (
    <>
      <StyledUl>
        {filteredCars &&
          filteredCars.map(
            ({
              id,
              year,
              make,
              model,
              type,
              img,
              description,
              fuelConsumption,
              engineSize,
              accessories,
              functionalities,
              rentalPrice,
              rentalCompany,
              address,
              rentalConditions,
              mileage,
            }) => {
              const addressParts = address.split(',').map(part => part.trim());
              const city = addressParts[1];
              const country = addressParts[2];

              return (
                <StyledList key={id}>
                  <StyledImg src={img} alt={make} />
                  <ModelDiv>
                    <span>
                      {make}&nbsp;
                      {model},&nbsp;{year}
                    </span>
                    <span>{rentalPrice}</span>
                  </ModelDiv>
                  <StyledDescription>
                    {city}, {country} | {rentalCompany} | {type} | {id} |{' '}
                    {accessories[0]}
                  </StyledDescription>
                  <StyledButton type="button">Learn more</StyledButton>
                </StyledList>
              );
            }
          )}
      </StyledUl>
    </>
  );
};

export { CatalogList };
