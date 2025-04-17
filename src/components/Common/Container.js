import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const StyledContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${theme.spacing(2)};
  padding-right: ${theme.spacing(2)};
  max-width: ${props => {
    switch (props.maxWidth) {
      case 'xs':
        return '600px';
      case 'sm':
        return '960px';
      case 'md':
        return '1280px';
      case 'lg':
        return '1440px';
      case 'xl':
        return '1920px';
      case false:
        return 'none';
      default:
        return '1280px';
    }
  }};
  
  ${props => props.centerContent && `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
  
  ${props => props.fullHeight && `
    min-height: calc(100vh - 64px); /* Subtract header height */
  `}
  
  ${props => props.gutterBottom && `
    margin-bottom: ${theme.spacing(4)};
  `}
  
  ${props => props.gutterTop && `
    margin-top: ${theme.spacing(4)};
  `}
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
  }
`;

const Container = ({ 
  children, 
  maxWidth = 'md',
  centerContent = false,
  fullHeight = false,
  gutterBottom = false,
  gutterTop = false,
  ...rest 
}) => {
  return (
    <StyledContainer 
      maxWidth={maxWidth} 
      centerContent={centerContent}
      fullHeight={fullHeight}
      gutterBottom={gutterBottom}
      gutterTop={gutterTop}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;