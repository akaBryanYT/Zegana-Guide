import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

// Styled component for a card container
const CardContainer = styled.div`
  background-color: ${props => props.variant === 'dark' 
    ? theme.colors.background.card 
    : theme.colors.background.paper};
  border-radius: ${theme.borders.radiusLarge};
  box-shadow: ${theme.shadows.medium};
  padding: ${theme.spacing(3)};
  margin-bottom: ${theme.spacing(3)};
  transition: transform ${theme.animations.medium}, box-shadow ${theme.animations.medium};
  border: ${props => props.highlight 
    ? `1px solid ${theme.colors.accent[props.highlightColor || 'teal']}` 
    : theme.borders.standard};
  
  &:hover {
    transform: ${props => props.interactive ? 'translateY(-4px)' : 'none'};
    box-shadow: ${props => props.interactive ? theme.shadows.large : theme.shadows.medium};
  }

  /* Emrakul variant styling */
  ${props => props.variant === 'emrakul' && `
    background: linear-gradient(135deg, #4f1152 0%, #2a0845 100%);
    border: 1px solid #8a2be2;
  `}

  /* Darksteel variant styling */
  ${props => props.variant === 'darksteel' && `
    background: linear-gradient(135deg, #3a3f44 0%, #23272b 100%);
    border: 1px solid #6c757d;
  `}
`;

const CardTitle = styled.h3`
  margin-top: 0;
  color: ${props => {
    if (props.variant === 'emrakul') return '#e89aff';
    if (props.variant === 'darksteel') return '#a8b5c2';
    return theme.colors.primary.light;
  }};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: ${theme.spacing(1)};
  }
`;

const CardContent = styled.div`
  color: ${theme.colors.text.primary};
`;

/**
 * Reusable Card component for displaying content blocks
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {React.ReactNode} props.icon - Optional icon component
 * @param {React.ReactNode} props.children - Card content
 * @param {boolean} props.interactive - Whether card has hover effects
 * @param {string} props.variant - Visual variant ('default', 'dark', 'emrakul', 'darksteel')
 * @param {boolean} props.highlight - Whether to highlight the card
 * @param {string} props.highlightColor - Color for highlight ('teal', 'blue', 'green')
 */
const Card = ({ 
  title, 
  icon, 
  children, 
  interactive = false, 
  variant = 'default',
  highlight = false,
  highlightColor = 'teal',
  ...rest 
}) => {
  return (
    <CardContainer 
      interactive={interactive} 
      variant={variant}
      highlight={highlight}
      highlightColor={highlightColor}
      {...rest}
    >
      {title && (
        <CardTitle variant={variant}>
          {icon && icon}
          {title}
        </CardTitle>
      )}
      <CardContent>
        {children}
      </CardContent>
    </CardContainer>
  );
};

export default Card;