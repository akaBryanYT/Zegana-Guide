import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const BadgeWrapper = styled.span`
  display: inline-block;
  padding: 0.25em 0.6em;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 10px;
  margin-right: ${theme.spacing(1)};
  margin-bottom: ${theme.spacing(0.5)};
  
  background-color: ${props => {
    switch (props.variant) {
      case 'ramp':
        return 'rgba(136, 204, 0, 0.3)';
      case 'draw':
        return 'rgba(0, 204, 255, 0.3)';
      case 'counter':
        return 'rgba(235, 92, 92, 0.3)';
      case 'creature':
        return 'rgba(136, 204, 0, 0.3)';
      case 'interaction':
        return 'rgba(220, 170, 255, 0.3)';
      case 'finisher':
        return 'rgba(255, 184, 108, 0.3)';
      case 'emrakul':
        return 'rgba(201, 143, 255, 0.3)';
      case 'darksteel':
        return 'rgba(168, 168, 168, 0.3)';
      default:
        return 'rgba(0, 168, 168, 0.3)';
    }
  }};
  
  color: ${props => {
    switch (props.variant) {
      case 'ramp':
        return theme.colors.accent.green;
      case 'draw':
        return theme.colors.accent.blue;
      case 'counter':
        return '#ff9999';
      case 'creature':
        return theme.colors.secondary.light;
      case 'interaction':
        return '#ddb8ff';
      case 'finisher':
        return '#ffcb7d';
      case 'emrakul':
        return '#e89aff';
      case 'darksteel':
        return '#c7c7c7';
      default:
        return theme.colors.accent.teal;
    }
  }};
  
  border: 1px solid ${props => {
    switch (props.variant) {
      case 'ramp':
        return theme.colors.accent.green;
      case 'draw':
        return theme.colors.accent.blue;
      case 'counter':
        return '#ff9999';
      case 'creature':
        return theme.colors.secondary.light;
      case 'interaction':
        return '#ddb8ff';
      case 'finisher':
        return '#ffcb7d';
      case 'emrakul':
        return '#e89aff';
      case 'darksteel':
        return '#c7c7c7';
      default:
        return theme.colors.accent.teal;
    }
  }};
`;

const Badge = ({ children, variant = 'default', ...rest }) => {
  return (
    <BadgeWrapper variant={variant} {...rest}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;