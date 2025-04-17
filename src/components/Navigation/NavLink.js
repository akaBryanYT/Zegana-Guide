import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import theme from '../../../src/theme';

const StyledNavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
  color: ${theme.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  border-radius: ${theme.borders.radius};
  transition: all ${theme.animations.medium};
  margin: ${theme.spacing(0.5)} 0;
  
  svg {
    margin-right: ${theme.spacing(1)};
  }
  
  &:hover {
    background-color: rgba(0, 168, 168, 0.15);
    color: ${theme.colors.primary.light};
  }
  
  &.active {
    background-color: rgba(0, 168, 168, 0.25);
    color: ${theme.colors.accent.teal};
    
    svg {
      color: ${theme.colors.accent.teal};
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing(1)} ${theme.spacing(1.5)};
  }
`;

const NavLink = ({ children, icon, ...props }) => {
  return (
    <StyledNavLink {...props}>
      {icon}
      {children}
    </StyledNavLink>
  );
};

export default NavLink;