// src/components/Cards/TableCardTooltip.js
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import ManaCost from './ManaCost';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 5; /* Higher base z-index */
  cursor: pointer;
`;

const CardName = styled.span`
  color: ${theme.colors.accent.teal};
  font-weight: 600;
  text-decoration: underline dotted;
  cursor: pointer;
`;

const TooltipContent = styled.div`
  position: fixed; /* Changed from absolute to fixed for table context */
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transform: translate(-50%, -100%);
  z-index: 9999; /* Very high z-index */
  min-width: 200px;
  max-width: 300px;
  background-color: ${theme.colors.background.card};
  border-radius: ${theme.borders.radiusLarge};
  box-shadow: ${theme.shadows.large};
  padding: ${theme.spacing(2)};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? 1 : 0};
  transition: all ${theme.animations.medium};
  pointer-events: none;
  margin-bottom: 10px;
  
  /* Small arrow pointing to the target */
  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${theme.colors.background.card};
  }
`;

const CardInfoContainer = styled.div`
  /* Card info styling */
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing(1)};
`;

const CardTitle = styled.h4`
  margin: 0;
  color: ${theme.colors.primary.light};
`;

const CardType = styled.div`
  color: ${theme.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${theme.spacing(1)};
  font-size: 0.9rem;
`;

const CardText = styled.div`
  color: ${theme.colors.text.primary};
  white-space: pre-line;
  font-size: 0.9rem;
`;

const PowerToughness = styled.div`
  margin-top: ${theme.spacing(1)};
  text-align: right;
  font-weight: bold;
`;

const TableCardTooltip = ({ card, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  if (!card) {
    return children;
  }

  const handleMouseEnter = (e) => {
    // Get position relative to viewport for fixed positioning
    setPosition({
      x: e.clientX,
      y: e.clientY - 10 // Offset a bit above cursor
    });
    setIsVisible(true);
  };
  
  return (
    <TooltipContainer>
      <CardName 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
      >
        {card.name}
      </CardName>
      
      <TooltipContent 
        visible={isVisible}
        x={position.x}
        y={position.y}
      >
        <CardInfoContainer>
          <CardHeader>
            <CardTitle>{card.name}</CardTitle>
            <ManaCost manaCost={card.mana_cost} />
          </CardHeader>
          
          <CardType>{card.type_line}</CardType>
          
          <CardText>{card.oracle_text}</CardText>
          
          {(card.power && card.toughness) && (
            <PowerToughness>{card.power}/{card.toughness}</PowerToughness>
          )}
        </CardInfoContainer>
      </TooltipContent>
    </TooltipContainer>
  );
};

export default TableCardTooltip;