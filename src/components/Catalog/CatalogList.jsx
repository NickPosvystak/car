import React, { useState } from 'react';
import {
  StyledUl,
  StyledImg,
  StyledList,
  ModelDiv,
  StyledDescription,
  StyledHeart,
  StyledIconBtn,
} from './CatalogList.styled';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/operations';
import ModalBtn from 'components/Modal/Modal';

const CatalogList = ({ cars, selectedPrice }) => {
  const dispatch = useDispatch();
    const [favorites, setFavorites] = useState([]);

  const page = 1;
  const limit = 12;

  useEffect(() => {
    dispatch(fetchCars(page, limit));
  }, [dispatch]);


    const toggleFavorite = id => {
      if (favorites.includes(id)) {
        setFavorites(favorites.filter(favId => favId !== id));
      } else {
        setFavorites([...favorites, id])
          ;
      }
  };
  const isFavorite = id => favorites.includes(id);
  
  
  const filteredCars =
    cars &&
    cars.filter(
      item =>
        (!selectedPrice || item.rentalPrice <= selectedPrice.label) &&
        item.make &&
        item.make.toLowerCase()
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
                <StyledList key={`${id}-${make}-${img}`}>
                  <StyledImg src={img} alt={make} />
                  <StyledIconBtn onClick={() => toggleFavorite(id)}>
                    <StyledHeart className={isFavorite(id) ? 'favorite' : ''} />
                  </StyledIconBtn>
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
                  <ModalBtn
                    carId={id}
                    carInfo={{
                      img,
                      make,
                      model,
                      year,
                      city,
                      country,
                      type,
                      id,
                      accessories,
                      functionalities,
                      rentalPrice,
                      rentalCompany,
                      address,
                      rentalConditions,
                      mileage,
                    }}
                  >
                    Learn more
                  </ModalBtn>
                </StyledList>
              );
            }
          )}
      </StyledUl>
    </>
  );
};

export { CatalogList };
