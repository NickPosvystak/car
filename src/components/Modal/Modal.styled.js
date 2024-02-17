import { Box } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import styled from 'styled-components';
import '../../index.css';

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 541px;
  height: 652px;
  background-color: background-paper;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 40px;

  border-radius: 24px;

  background: rgb(255, 255, 255);
`;

export const StyledButton = styled.button`
  width: 274px;
  height: 44px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;
  border-radius: 12px;
  background: var(--primary-color);
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
`;

export const StyledIconClose = styled(IoCloseOutline)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
`;
