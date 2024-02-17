import * as React from 'react';
import Modal from '@mui/material/Modal';
import { StyledBox, StyledButton } from './Modal.styled';
import IconClose from './Icon';
import { useState } from 'react';

const ModalBtn = ({ carId, carInfo, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <StyledButton onClick={handleOpen}>{children}</StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <IconClose onClose={handleClose} />
          <div>
            <img
              src={carInfo.img}
              alt={carInfo.make}
              width="461px"
              height="248px"
            />
            <div>
              <span>{carInfo.make}</span>&nbsp;<span>{carInfo.model}</span>,
              &nbsp;
              <span>{carInfo.year}</span>
            </div>
            <div>
              <p>
                {carInfo.city}, {carInfo.country} | id:{carInfo.id}| Year:
                {carInfo.year}| Type:{carInfo.type} | fuelConsumption:
                {carInfo.fuelConsumption} | engineSize:
                {carInfo.engineSize}
              </p>
              <p>{carInfo.description}</p>
            </div>
            <div>
              <h2>Accessories and functionalities:</h2>
              <p>{carInfo.functionalities}.trim('|')</p>
            </div>
            <div>
              <p>Minimum age:{carInfo.rentalConditions[0]}</p>
              <p>{carInfo.rentalConditions[1]}</p>
              <p>{carInfo.rentalConditions[2]}</p>
              <p>Mileage:{carInfo.mileage}</p>
              <p>Price:{carInfo.rentalPrice}</p>
            </div>
            <a href="tel:+380730000000">Rental car</a>
           
          </div>
        </StyledBox>
      </Modal>
    </div>
  );
};

export default ModalBtn;
