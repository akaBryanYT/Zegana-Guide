import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import ManaCost from './ManaCost';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1;
  cursor: pointer;
`;

const CardImage = styled.img`
  max-width: 100%;
  border-radius: 4.2% / 3%;
  box-shadow: ${theme.shadows.small};
  transition: all ${theme.animations.medium};
  
  &:hover {
    box-shadow: ${theme.shadows.glow};
  }
`;

const CardName = styled.span`
  color: ${theme.colors.accent.teal};
  font-weight: 600;
  text-decoration: underline dotted;
  cursor: pointer;
`;

const TooltipContent = styled.div`
  position: absolute;
  top: ${props => props.position === 'top' ? 'auto' : '100%'};
  bottom: ${props => props.position === 'top' ? '100%' : 'auto'};
  left: ${props => props.position === 'right' ? 'calc(100% + 10px)' : props.position === 'left' ? 'auto' : '50%'};
  right: ${props => props.position === 'left' ? 'calc(100% + 10px)' : 'auto'};
  transform: ${props => (props.position === 'left' || props.position === 'right') ? 'translateY(-50%)' : 'translateX(-50%)'};
  z-index: 1000;
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
  margin: ${props => (props.position === 'top' || props.position === 'bottom') ? '10px 0' : '0 10px'};
  top: ${props => props.position === 'left' || props.position === 'right' ? '50%' : 'auto'};
  
  /* Small arrow pointing to the target */
  &::before {
    content: '';
    position: absolute;
    ${props => {
      switch(props.position) {
        case 'top':
          return `
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-top: 10px solid ${theme.colors.background.card};
          `;
        case 'bottom':
          return `
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid ${theme.colors.background.card};
          `;
        case 'left':
          return `
            right: -10px;
            top: 50%;
            transform: translateY(-50%);
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid ${theme.colors.background.card};
          `;
        case 'right':
          return `
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-right: 10px solid ${theme.colors.background.card};
          `;
        default:
          return '';
      }
    }}
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

/**
 * Component for showing card information on hover
 * 
 * @param {Object} props - Component props
 * @param {Object} props.card - Card data object
 * @param {React.ReactNode} props.children - The element that triggers the tooltip
 * @param {string} props.position - Tooltip position ('top', 'bottom', 'left', 'right')
 * @param {boolean} props.showImage - Whether to show the card image
 */
const CardTooltip = ({ 
  card, 
  children, 
  position = 'top',
  showImage = false,
  nameOnly = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  if (!card) {
    // If card data not provided, just render children
    return children;
  }
  
  // If the nameOnly prop is true, just render the card name as a tooltip trigger
  const trigger = nameOnly ? (
    <CardName 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {card.name}
    </CardName>
  ) : (
    <div 
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
    </div>
  );
  
  return (
    <TooltipContainer>
      {trigger}
      
      <TooltipContent 
        visible={isVisible} 
        position={position}
      >
        {showImage && card.normal_image_uri && (
          <CardImage 
            src={card.normal_image_uri} 
            alt={card.name} 
          />
        )}
        
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

export default CardTooltip;