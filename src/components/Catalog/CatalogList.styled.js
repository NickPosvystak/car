import styled from 'styled-components';

export const StyledUl = styled.ul`
  width: 1439px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;

  padding-left: 128px;
  padding-right: 128px;
`;

export const StyledList = styled.li`
  display: flex;
  flex-direction: column;

  list-style: none;
  width: 274px;
  height: 426px;
`;

export const StyledImg = styled.img`
  /* object-fit: contain; */
  width: 274px;
  height: 268px;
  border-radius: 25px;
  padding-bottom: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.071%
    ),
   
`;

export const ModelDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;

  color: rgb(18, 20, 23);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0%;
  text-align: left;
`;

export const StyledDescription = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0%;
  text-align: left;
`;

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;
  width: 274px;
  height: 44px;
  margin-top: auto;

  border-radius: 12px;

  background: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  cursor: pointer;
`;
