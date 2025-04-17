import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const SectionWrapper = styled.section`
  margin-bottom: ${props => props.spacing ? theme.spacing(props.spacing) : theme.spacing(6)};
  padding: ${props => props.padding ? theme.spacing(props.padding) : 0};
  position: relative;
  
  ${props => props.background && `
    background-color: ${props.background};
    border-radius: ${theme.borders.radiusLarge};
    padding: ${theme.spacing(3)};
    box-shadow: ${theme.shadows.small};
  `}
  
  ${props => props.variant === 'emrakul' && `
    background: linear-gradient(135deg, rgba(79, 17, 82, 0.3) 0%, rgba(42, 8, 69, 0.3) 100%);
    border-left: 4px solid #8a2be2;
    padding-left: ${theme.spacing(3)};
  `}
  
  ${props => props.variant === 'darksteel' && `
    background: linear-gradient(135deg, rgba(58, 63, 68, 0.3) 0%, rgba(35, 39, 43, 0.3) 100%);
    border-left: 4px solid #6c757d;
    padding-left: ${theme.spacing(3)};
  `}
  
  ${props => props.centered && `
    text-align: center;
  `}
  
  ${props => props.divider && `
    border-bottom: 1px solid rgba(0, 168, 168, 0.3);
    padding-bottom: ${theme.spacing(3)};
  `}
  
  h2, h3, h4 {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: ${theme.spacing(1)};
    }
  }
  
  ${props => props.highlight && `
    &::before {
      content: '';
      position: absolute;
      left: -${theme.spacing(2)};
      top: 0;
      bottom: 0;
      width: 4px;
      background: ${props.highlight === true 
        ? theme.colors.primary.main 
        : theme.colors.accent[props.highlight] || props.highlight};
      border-radius: 4px;
    }
  `}
`;

const TitleWrapper = styled.div`
  margin-bottom: ${theme.spacing(2)};
  
  ${props => props.withSubtitle && `
    margin-bottom: ${theme.spacing(1)};
  `}
`;

const SubtitleWrapper = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: 1.1rem;
  margin-top: -${theme.spacing(1)};
  margin-bottom: ${theme.spacing(3)};
  font-style: italic;
`;

/**
 * Section component for dividing content into logical sections
 */
const Section = ({ 
  children, 
  title,
  subtitle,
  titleIcon,
  titleAs = 'h2',
  spacing,
  padding,
  background,
  centered = false,
  divider = false,
  highlight = false,
  variant,
  ...rest 
}) => {
  const TitleComponent = titleAs;
  
  return (
    <SectionWrapper 
      spacing={spacing}
      padding={padding}
      background={background}
      centered={centered}
      divider={divider}
      highlight={highlight}
      variant={variant}
      {...rest}
    >
      {title && (
        <TitleWrapper withSubtitle={!!subtitle}>
          <TitleComponent>
            {titleIcon && titleIcon}
            {title}
          </TitleComponent>
        </TitleWrapper>
      )}
      
      {subtitle && (
        <SubtitleWrapper>{subtitle}</SubtitleWrapper>
      )}
      
      {children}
    </SectionWrapper>
  );
};

export default Section;