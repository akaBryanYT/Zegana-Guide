import React from 'react';
import styled from 'styled-components';
import theme from '../../../src/theme';

// Converting mana cost string like "{2}{G}{G}{U}{U}" to symbols
const ManaContainer = styled.div`
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  margin: ${props => props.margin || '0'};
`;

const ManaSymbol = styled.div`
  width: ${props => props.size || '20px'};
  height: ${props => props.size || '20px'};
  border-radius: 50%;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.fontSize || '0.75rem'};
  color: #000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  
  ${props => {
    // Color maps for mana symbols
    switch(props.manaType) {
      case 'W': 
        return `background: linear-gradient(135deg, #f9faf5 0%, #e5e8e0 100%);`;
      case 'U': 
        return `background: linear-gradient(135deg, #00bfff 0%, #0080ff 100%);
                color: white;`;
      case 'B': 
        return `background: linear-gradient(135deg, #444444 0%, #222222 100%);
                color: white;`;
      case 'R': 
        return `background: linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%);
                color: white;`;
      case 'G': 
        return `background: linear-gradient(135deg, #88cc00 0%, #6b9e00 100%);
                color: white;`;
      case 'C': 
        return `background: linear-gradient(135deg, #c0c0c0 0%, #8a8a8a 100%);`;
      case 'X': 
        return `background: linear-gradient(135deg, #888888 0%, #555555 100%);
                color: white;`;
      default: 
        // For numeric mana
        return `background: linear-gradient(135deg, #e6e6e6 0%, #cccccc 100%);`;
    }
  }}
`;

const parseManaCost = (manaCost) => {
  if (!manaCost) return [];
  
  // Extract values within {} brackets
  const manaRegex = /\{([^}]+)\}/g;
  const matches = [];
  let match;
  
  while ((match = manaRegex.exec(manaCost)) !== null) {
    matches.push(match[1]);
  }
  
  return matches;
};

const ManaCost = ({ manaCost, size, fontSize, margin }) => {
  const manaSymbols = parseManaCost(manaCost);
  
  return (
    <ManaContainer margin={margin}>
      {manaSymbols.map((symbol, index) => (
        <ManaSymbol 
          key={index} 
          manaType={symbol.length === 1 ? symbol : 'numeric'} 
          size={size} 
          fontSize={fontSize}
        >
          {symbol}
        </ManaSymbol>
      ))}
    </ManaContainer>
  );
};

export default ManaCost;