import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import NavLink from './NavLink';
import { 
  HomeIcon, 
  StrategyIcon, 
  MulliganIcon, 
  CardsIcon, 
  CompareIcon,
  MenuIcon,
  CloseIcon
} from '../../Icons';
import VariantToggle from '../DeckVariants/VariantToggle';

// Import Zegana for logo
import deckData from '../../../src/simplified_final_deck.json';
const zeganaCard = deckData.find(card => card.name === "Prime Speaker Zegana");

const NavbarContainer = styled.nav`
  background-color: ${theme.colors.background.card};
  color: ${theme.colors.text.primary};
  box-shadow: ${theme.shadows.medium};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing(1.5)} ${theme.spacing(2)};
  max-width: ${theme.breakpoints.lg};
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-family: ${theme.typography.headerFamily};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary.light};
  
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: ${theme.spacing(1)};
    object-fit: cover;
    box-shadow: ${theme.shadows.small};
  }
`;

const NavLinks = styled.div`
  display: flex;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background.card};
    flex-direction: column;
    padding: ${theme.spacing(2)};
    box-shadow: ${theme.shadows.medium};
  }
`;

const MobileMenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.text.primary};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Navbar = ({ activeVariant, onVariantChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <NavbarInner>
        <Logo>
          {zeganaCard && (
            <img 
              src={zeganaCard.normal_image_uri} 
              alt="Zegana Logo" 
            />
          )}
          Prime Speaker Zegana
        </Logo>
        
        <MobileMenuToggle onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuToggle>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" icon={<HomeIcon />} end>
            Home
          </NavLink>
          <NavLink to="/strategy" icon={<StrategyIcon />}>
            Strategy
          </NavLink>
          <NavLink to="/mulligan" icon={<MulliganIcon />}>
            Mulligan Guide
          </NavLink>
          <NavLink to="/cards" icon={<CardsIcon />}>
            Card Analysis
          </NavLink>
          <NavLink to="/variants" icon={<CompareIcon />}>
            Variant Comparison
          </NavLink>
          
          <VariantToggle 
            activeVariant={activeVariant} 
            onChange={onVariantChange} 
          />
        </NavLinks>
      </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;