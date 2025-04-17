// Simic-themed color palette and styling constants
const theme = {
  // Primary Simic colors
  colors: {
    primary: {
      main: '#00a8a8', // Teal/turquoise - primary Simic color
      light: '#00ccaa',
      dark: '#008080',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#88cc00', // Green - secondary Simic color
      light: '#a4e600',
      dark: '#6b9e00',
      contrastText: '#ffffff'
    },
    background: {
      default: '#002d3d', // Deep blue-green
      paper: '#003e52',
      card: '#004c63',
      light: '#e6faff'
    },
    text: {
      primary: '#e6faff',
      secondary: '#b0e8f3',
      disabled: '#78a5b3',
      hint: '#5d8997'
    },
    // Other Simic-related colors
    accent: {
      blue: '#00ccff',
      green: '#7fff00',
      teal: '#00ffcc'
    }
  },
  
  // Typography
  typography: {
    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
    headerFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
    bodyFamily: "'Source Sans Pro', 'Helvetica Neue', sans-serif",
  },
  
  // Spacing and sizing
  spacing: (multiplier) => `${multiplier * 8}px`,
  
  // Shadows with a slight teal tint
  shadows: {
    small: '0 2px 8px rgba(0, 168, 168, 0.15)',
    medium: '0 4px 12px rgba(0, 168, 168, 0.2)',
    large: '0 8px 24px rgba(0, 168, 168, 0.25)',
    glow: '0 0 15px rgba(0, 204, 170, 0.6)'
  },

  // Borders
  borders: {
    radius: '4px',
    radiusLarge: '8px',
    standard: '1px solid rgba(0, 204, 170, 0.3)'
  },

  // Animations
  animations: {
    fast: '0.2s ease',
    medium: '0.3s ease-in-out',
    slow: '0.5s ease-in-out'
  },

  // Breakpoints
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px'
  }
};

export default theme;