import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinkStyled, StyledHeader } from './Navigation.styled';

const Navigation = () => {
  return (
    <div>
      <StyledHeader>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      </StyledHeader>
      <Outlet />
    </div>
  );
};

export default Navigation;
