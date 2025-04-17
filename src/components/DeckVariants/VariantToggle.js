import React from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';
import { EmrakulIcon, DarksteelIcon } from '../../../src/Icons';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  padding: ${theme.spacing(0.5)};
  margin: ${theme.spacing(2)} 0;
  border: 1px solid rgba(0, 168, 168, 0.3);
`;

const ToggleOption = styled.button`
  display: flex;
  align-items: center;
  padding: ${theme.spacing(1)} ${theme.spacing(2)};
  border-radius: 20px;
  border: none;
  background-color: ${({ active, variant }) => 
    active 
      ? variant === 'emrakul' 
        ? 'rgba(138, 43, 226, 0.3)' 
        : 'rgba(100, 100, 100, 0.3)'
      : 'transparent'
  };
  color: ${({ active, variant }) => 
    active 
      ? variant === 'emrakul' 
        ? '#e89aff'
        : '#c7c7c7'
      : theme.colors.text.secondary
  };
  cursor: pointer;
  font-weight: 600;
  transition: all ${theme.animations.medium};
  
  &:hover {
    background-color: ${({ variant }) => 
      variant === 'emrakul' 
        ? 'rgba(138, 43, 226, 0.2)'
        : 'rgba(100, 100, 100, 0.2)'
    };
  }
  
  svg {
    margin-right: ${theme.spacing(1)};
  }
`;

const VariantToggle = ({ activeVariant, onChange }) => {
  return (
    <ToggleContainer>
      <ToggleOption 
        active={activeVariant === 'emrakul'} 
        variant="emrakul"
        onClick={() => onChange('emrakul')}
      >
        <EmrakulIcon />
        Emrakul Build
      </ToggleOption>
      <ToggleOption 
        active={activeVariant === 'darksteel'} 
        variant="darksteel"
        onClick={() => onChange('darksteel')}
      >
        <DarksteelIcon />
        Darksteel Build
      </ToggleOption>
    </ToggleContainer>
  );
};

export default VariantToggle;