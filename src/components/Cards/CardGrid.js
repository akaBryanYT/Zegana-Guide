import React from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import CardTooltip from './CardTooltip';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${theme.spacing(3)};
  margin: ${theme.spacing(3)} 0;
`;

const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${theme.borders.radius};
  padding: ${theme.spacing(1.5)};
  transition: transform ${theme.animations.medium}, box-shadow ${theme.animations.medium};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
    background-color: rgba(0, 168, 168, 0.1);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4.2% / 3%;
  box-shadow: ${theme.shadows.small};
`;

const CardTitle = styled.h4`
  margin: ${theme.spacing(1)} 0 0 0;
  font-size: 0.9rem;
  text-align: center;
  color: ${theme.colors.text.primary};
`;

const CardType = styled.div`
  font-size: 0.8rem;
  color: ${theme.colors.text.secondary};
  text-align: center;
  font-style: italic;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/**
 * Component to display a grid of cards with hover information
 * 
 * @param {Object} props
 * @param {Array} props.cards - Array of card objects to display
 * @param {Function} props.onCardClick - Optional click handler for cards
 * @param {string} props.category - Optional category for filtering
 */
const CardGrid = ({ cards = [], onCardClick, category }) => {
  // Filter cards by category if provided
  const displayCards = category 
    ? cards.filter(card => {
        // Simple category matching logic - can be expanded based on needs
        if (category === 'creatures' && card.type_line?.includes('Creature')) return true;
        if (category === 'instants' && card.type_line?.includes('Instant')) return true;
        if (category === 'sorceries' && card.type_line?.includes('Sorcery')) return true;
        if (category === 'artifacts' && card.type_line?.includes('Artifact')) return true;
        if (category === 'enchantments' && card.type_line?.includes('Enchantment')) return true;
        if (category === 'lands' && card.type_line?.includes('Land')) return true;
        return false;
      })
    : cards;

  return (
    <Grid>
      {displayCards.map((card, index) => (
        <CardTooltip key={index} card={card} position="top">
          <CardContainer onClick={() => onCardClick && onCardClick(card)}>
            {card.normal_image_uri && (
              <CardImage src={card.normal_image_uri} alt={card.name} />
            )}
            <CardTitle>{card.name}</CardTitle>
            <CardType>{card.type_line}</CardType>
          </CardContainer>
        </CardTooltip>
      ))}
    </Grid>
  );
};

export default CardGrid;