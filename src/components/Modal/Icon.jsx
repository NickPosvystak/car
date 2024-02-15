import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { StyledIconClose } from './Modal.styled';

const IconClose = ({ onClose }) => {
  return (
    <StyledIconClose onClick={onClose}>
      <AiOutlineClose />
    </StyledIconClose>
  );
};

export default IconClose;
