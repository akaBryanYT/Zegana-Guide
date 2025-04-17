import React from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

// Global styles for the entire application
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: ${theme.typography.bodyFamily};
    background: linear-gradient(135deg, ${theme.colors.background.default} 0%, ${theme.colors.background.paper} 100%);
    color: ${theme.colors.text.primary};
    line-height: 1.5;
    font-size: 16px;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.headerFamily};
    font-weight: 600;
    margin-bottom: 0.5em;
    color: ${theme.colors.primary.light};
  }

  h1 {
    font-size: 2.5rem;
    border-bottom: 2px solid ${theme.colors.primary.main};
    padding-bottom: 0.3em;
    margin-bottom: 0.8em;
  }

  h2 {
    font-size: 2rem;
    color: ${theme.colors.secondary.light};
    padding-bottom: 0.2em;
  }

  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary.main};
  }

  a {
    color: ${theme.colors.accent.blue};
    text-decoration: none;
    transition: color ${theme.animations.fast};
    
    &:hover {
      color: ${theme.colors.accent.teal};
      text-shadow: ${theme.shadows.glow};
    }
  }

  p {
    margin-bottom: 1em;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 2px 4px;
    border-radius: 3px;
  }

  /* Simic-themed scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.paper};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.dark};
    border-radius: 5px;
    
    &:hover {
      background: ${theme.colors.primary.main};
    }
  }

  /* Custom selection color */
  ::selection {
    background: ${theme.colors.primary.main}80; /* 50% opacity */
    color: white;
  }
`;

// ThemeProvider component to wrap around the entire application
const ThemeProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default ThemeProvider;