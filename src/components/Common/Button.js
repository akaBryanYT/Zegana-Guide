import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';

/*
 * Reusable polymorphic button.
 * If the caller passes a `component` prop (e.g. Link) we render the underlying
 * styled button using styled‑components’ built‑in `as` prop so routing links
 * work correctly.
 */

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'small' 
    ? `${theme.spacing(0.5)} ${theme.spacing(1)}`
    : props.size === 'large' 
      ? `${theme.spacing(1.5)} ${theme.spacing(3)}`
      : `${theme.spacing(1)} ${theme.spacing(2)}`};
  font-family: ${theme.typography.fontFamily};
  font-size: ${props => props.size === 'small' 
    ? '0.875rem' 
    : props.size === 'large' 
      ? '1.125rem' 
      : '1rem'};
  font-weight: 600;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  border-radius: ${theme.borders.radius};
  cursor: pointer;
  transition: all ${theme.animations.medium};
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  min-width: ${props => (props.fullWidth ? '100%' : 'auto')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  /* Simic-themed ripple */
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1) translate(-50%, -50%);
  }

  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }

  @keyframes ripple {
    0% { transform: scale(0); opacity: 0.5; }
    20% { transform: scale(25); opacity: 0.3; }
    100% { transform: scale(40); opacity: 0; }
  }

  /* Variants */
  ${props => props.variant === 'contained' && `
    background-color: ${props.color === 'secondary' ? theme.colors.secondary.main : theme.colors.primary.main};
    color: ${theme.colors.text.primary};
    box-shadow: ${theme.shadows.small};

    &:hover:not(:disabled) {
      background-color: ${props.color === 'secondary' ? theme.colors.secondary.dark : theme.colors.primary.dark};
      box-shadow: ${theme.shadows.medium};
    }

    &:active:not(:disabled) { transform: translateY(1px); }
  `}

  ${props => props.variant === 'outlined' && `
    background-color: transparent;
    color: ${props.color === 'secondary' ? theme.colors.secondary.main : theme.colors.primary.main};
    border: 1px solid ${props.color === 'secondary' ? theme.colors.secondary.main : theme.colors.primary.main};

    &:hover:not(:disabled) {
      background-color: ${props.color === 'secondary' ? 'rgba(136,204,0,.1)' : 'rgba(0,168,168,.1)'};
    }
  `}

  ${props => props.variant === 'text' && `
    background-color: transparent;
    color: ${props.color === 'secondary' ? theme.colors.secondary.main : theme.colors.primary.main};

    &:hover:not(:disabled) {
      background-color: ${props.color === 'secondary' ? 'rgba(136,204,0,.1)' : 'rgba(0,168,168,.1)'};
    }
  `}

  /* icon spacing */
  & > svg { margin-right: ${props => (props.iconPosition === 'start' ? theme.spacing(1) : '0')}; margin-left: ${props => (props.iconPosition === 'end' ? theme.spacing(1) : '0')}; }
`;

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  uppercase = false,
  onClick,
  icon,
  iconPosition = 'start',
  component, // Accept a component (e.g. Link)
  ...rest
}) => {
  return (
    <StyledButton
      as={component || undefined}
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      uppercase={uppercase}
      onClick={onClick}
      iconPosition={iconPosition}
      {...rest}
    >
      {icon && iconPosition === 'start' && icon}
      {children}
      {icon && iconPosition === 'end' && icon}
    </StyledButton>
  );
};

export default Button;
