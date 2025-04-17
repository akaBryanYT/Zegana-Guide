import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import CardTooltip from '../Cards/CardTooltip';

const HandContainer = styled.div`
  background-color: ${props => props.quality === 'good' 
    ? 'rgba(136, 204, 0, 0.15)' 
    : props.quality === 'medium' 
      ? 'rgba(255, 184, 0, 0.15)'
      : 'rgba(235, 92, 92, 0.15)'};
  border-left: 4px solid ${props => props.quality === 'good' 
    ? theme.colors.secondary.main 
    : props.quality === 'medium' 
      ? '#ffb800'
      : '#eb5c5c'};
  border-radius: ${theme.borders.radius};
  padding: ${theme.spacing(2)};
  margin-bottom: ${theme.spacing(3)};
`;

const HandTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: ${theme.spacing(2)};
  color: ${props => props.quality === 'good' 
    ? theme.colors.secondary.light 
    : props.quality === 'medium' 
      ? '#ffb800'
      : '#ff6b6b'};
`;

const CardsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(2)};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

const CardPreview = styled.div`
  width: 80px;
  height: 112px; /* Standard card ratio */
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4.75% / 3.5%;
  overflow: hidden;
  box-shadow: ${theme.shadows.small};
  transition: transform ${theme.animations.fast};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.medium};
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4.75% / 3.5%;
  }
`;

const HandAnalysis = styled.div`
  margin-top: ${theme.spacing(2)};
`;

const Verdict = styled.div`
  font-weight: 600;
  margin-top: ${theme.spacing(2)};
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: ${theme.borders.radius};
  background-color: rgba(0, 0, 0, 0.2);
  display: inline-block;
`;

const CardsList = styled.ul`
  margin: ${theme.spacing(1)} 0;
  padding-left: ${theme.spacing(3)};
  
  li {
    margin-bottom: ${theme.spacing(0.5)};
  }
`;

/**
 * Component for displaying an example opening hand with analysis
 */
const HandExample = ({ 
  title,
  cards = [],
  analysis,
  verdict,
  quality = 'good', // 'good', 'medium', 'bad'
  variant = 'emrakul'
}) => {
  return (
    <HandContainer quality={quality}>
      <HandTitle quality={quality}>{title}</HandTitle>
      
      <CardsPreview>
        {cards.map((card, index) => (
          <CardTooltip key={index} card={card} position="top">
            <CardPreview>
              {card.normal_image_uri && (
                <img src={card.normal_image_uri} alt={card.name} />
              )}
            </CardPreview>
          </CardTooltip>
        ))}
      </CardsPreview>
      
      <h5>Cards in Hand:</h5>
      <CardsList>
        {cards.map((card, index) => (
          <li key={index}>
            <CardTooltip card={card} nameOnly>
              {card.name}
            </CardTooltip>
          </li>
        ))}
      </CardsList>
      
      <HandAnalysis>
        <h5>Analysis:</h5>
        <p>{analysis}</p>
      </HandAnalysis>
      
      <Verdict>
        Verdict: {verdict}
      </Verdict>
    </HandContainer>
  );
};

export default HandExample;